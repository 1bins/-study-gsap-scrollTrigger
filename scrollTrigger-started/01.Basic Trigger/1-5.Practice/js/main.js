/**
 * CSS에 내 크기만큼 값 정하기 (둘 중 하나 사용)
 * - 부모에게 display: flex
 * - 자식에게 width: fit-content
 */

// const tween = gsap.fromTo('.wrapper.text',
// {x: '100%'},
// {x(){return - (this.targets()[0].scrollWidth - innerWidth)}})

// const tween = gsap.fromTo('.wrapper.text',
// {x(){return - (this.targets()[0].scrollWidth)}},
// {x: 0})

// ScrollTrigger.create({
//     trigger: '.demo-text',
//     // start: 'top bottom',
//     // end: 'bottom top',
//     markers: true,
//     scrub: 1,
//     animation: tween,
// })

const showDemo = () => {
    gsap.to('.loader', {autoAlpha: 0})
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0)

    gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        if(w){
            const [x, xEnd] = index % 2 ? ['100%', -(w.scrollWidth - innerWidth)] : [-(w.scrollWidth), 0];
    
            gsap.fromTo(w, {x}, {
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: .5,
                }
            })
        }
    })
}

const awsome = () => {
    const tl = gsap.timeline({
        defaults: {ease: 'none'}
    })
    .from('.awsome .text', {x: innerWidth})
    .to('.awsome .text', {scale: 50, xPercent: -200})

    ScrollTrigger.create({
        trigger: '.awsome',
        start: 'top top',
        end: '+=3000',
        pin: true,
        animation: tl,
        scrub: 1
    })
}

const tryNow = () => {
    ScrollTrigger.create({
        trigger: '.try',
        start: 'top top',
        end: '+=1000',
        pin: true,
        animation: gsap.from('.try .text', {y: 50, opacity: 0}),
        scrub: 1,
    })
}



function init(){
    showDemo()
    awsome()
    tryNow()
}

/**
 * Loader
 * imagesLoaded()
 * https://imagesloaded.desandro.com/
 */

const img = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');

const updateProgress = (instance) => {
    loader.textContent = `${Math.round(instance.progressedCount / img.length * 100)}%`
}

imagesLoaded(img)
.on('progress', updateProgress)
.on('always', init)