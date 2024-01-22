barba.hooks.leave(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())
})
barba.hooks.after(() => {
    scrollbars.update();
    scrollbars.scrollTo(0, 0)
    markers()
})
barba.hooks.beforeEnter((data) => {
    if(data.next.namespace !== 'main'){
        gsap.set('nav', {pointerEvents: 'none'})
        gsap.set('nav li', {yPercent: innerHeight})
    }
})


function pageLeave(){

    const nav = gsap.timeline()
    .set('nav', {pointerEvents: 'none'})
    .to('nav li', {
        yPercent: innerHeight,
        duration: 1.5,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.2,
            from: 'end'
        }
    })

    const scale = gsap.timeline()
    .to('.image_container', {scale: 1, duration: 1.5, ease: 'power3.inOut'})
    .to('.image_container > div', {filter: 'brightness(1)'})

    return scale;
}

function pageEnter(){
    const heading = gsap.timeline()
    .from('.line', {scaleX: 0, transformOrigin: 'left center'})
    .from('h3 span', {yPercent: 100})
    .from('p span', {yPercent: -100}, '<')
}

function detailLeave(){
    const tl = gsap.timeline()
    .to('.visual', {filter: 'brightness(0.4)'})
    .to('.visual', {scale: 0.5, ease: 'power3.inOut', duration: 1.5}, 0)

    const nav = gsap.timeline()
    .set('nav', {pointerEvents: 'initial'})
    .to('nav li', {
        yPercent: 0,
        duration: 1.5,
        ease: 'power4.inOut',
        stagger: {
            amount: 0.2,
            from: 'start'
        }
    })

    const heading = gsap.timeline()
    .to('.line', {scaleX: 0, transformOrigin: 'left center'})
    .to('h3 span', {yPercent: 100})
    .to('p span', {yPercent: -100}, '<')

    return tl;
}

function main(){
    let count = 5;
    gsap.utils.toArray('nav li').forEach((li, index) => {
        li.addEventListener('mouseenter',() => {
            const exceptMe = `.image_container .cover:not(:nth-child(${index + 1}))`
            const me = `.image_container .cover:nth-child(${index + 1})`

            const navAnimation = gsap.timeline({defaults: {duration: 0.2}})
            .to('nav li', {opacity: 0.2})
            .to(li, {opacity: 1}, 0)

            gsap.defaults({overwrite: 'auto'})
            // 버벅임 막기, 마우스를 막 움직였을 때 여러개의 트윈이 실행되는데 최종 트윈만 실행하게

            const imgAnimation = gsap.timeline()
            .to(exceptMe, {height: 0, onComplete(){gsap.set(me, {zIndex: ++count})}})
            .to(me, {height: '100%'}, 0)
        })
        li.addEventListener('mouseleave', () => {gsap.to('nav li', {opacity: 1})})
    })
}

function rome(){
    ScrollTrigger.create({
        trigger: '.section02',
        start: 'top top',
        end: '+=2000',
        animation: gsap.fromTo('.card_container', {x: '100%'}, {x(_,t){return -(t.offsetWidth - innerWidth)}}),
        pin: true,
        markers: true,
        scrub: true,
    })
}
function england(){
    const { chars } = new SplitText('.section02 p', {type: 'chars'})

    ScrollTrigger.create({
        trigger: '.section01',
        start: 'bottom center',
        end: '+=2000',
        animation: gsap.from(chars, {opacity: 0, stagger: 0.1}),
        markers: true,
        scrub: true,
    })
}
function india(){
    ScrollTrigger.create({
        trigger: '.section02',
        start: 'top top',
        end: '+=2000',
        animation: gsap.fromTo('.section02 h3', {letterSpacing: 0}, {letterSpacing: 150}),
        pin: true,
        pinSpacing: false,
        markers: true,
        scrub: true,
    })
}
function peru(){
    gsap.utils.toArray('#peru .section').forEach(section => {
        const pic = section.querySelector('.pic')
        const desc = section.querySelector('.description')

        const tl = gsap.timeline()
        .from(pic, {opacity: 0, x: -200})
        .from(desc, {opacity: 0, x: 200}, 0)

        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            end: 'bottom center',
            animation: tl,
            markers: true,
            scrub: true,
        })
    })
}

function setImageOrder({ current }){
    const n = current.namespace;

    const tl = gsap.timeline()
    .set('.image_container .cover', {height: 0})
    .set(`.image_container .cover[data-name="${n}"]`, {height: '100%', zIndex: 5})
}

const commonOptions = {
    sync: true,
    leave:() => {
        scrollbar.scrollTo(0, 0, 600)
        return detailLeave()
    },
    beforeEnter:(data) => {
        setImageOrder(data)
    }
}

barba.init({
    views: [
        {namespace: 'main', beforeEnter: () => main()},
        {namespace: 'rome', beforeEnter: () => rome()},
        {namespace: 'england', beforeEnter: () => england()},
        {namespace: 'india', beforeEnter: () => india()},
        {namespace: 'peru', beforeEnter: () => peru()},
    ],
    transitions: [
        {
            name: 'default-transition',
            once:() => markers(),
            leave:() => {
                return pageLeave()
            },
            enter:() => {
                pageEnter()
            }
        },
        {namespace: 'rome', ...commonOptions},
        {namespace: 'england', ...commonOptions},
        {namespace: 'india', ...commonOptions},
        {namespace: 'peru', ...commonOptions}
    ]
})