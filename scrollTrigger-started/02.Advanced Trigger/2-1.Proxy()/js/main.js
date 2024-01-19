/**
 * scroller setting
 */
gsap.registerPlugin(ScrollTrigger);
const options = {
    damping: 0.08,
    alwaysShowTracks: true
}

const scrollElement = [
    {
        target: document.querySelector('#container'),
        scrollName: null,
        marker: 'main'
    },
    {
        target: document.querySelector('.deep'),
        scrollName: null,
        marker: 'deep'
    }
];

scrollElement.forEach(elem => {
    elem.scrollName = Scrollbar.init(elem.target, {...options})

    ScrollTrigger.scrollerProxy(elem.target, {
        scrollTop(value){
            if(arguments.length){
                elem.scrollName.scrollTop = value;    // setter
            }
            return elem.scrollName.scrollTop; // getter
        }
    });

    elem.scrollName.addListener(ScrollTrigger.update);
})


ScrollTrigger.create({
    trigger: '.section02',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: 1,
    animation: gsap.to('.section02 h2', {x: 500}),
    scroller: scrollElement[0].target,
    id: scrollElement[0].marker,
})


ScrollTrigger.create({
    trigger: '.d2',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: 1,
    animation: gsap.to('.text', {x: 200}),
    scroller: scrollElement[1].target,
    id: scrollElement[1].marker,
})

scrollElement.forEach(elem => {
    // markers 고정 => 항상 스크롤 트리거 밑에
    if(document.querySelector('.gsap-marker-scroller-start')){
        const markers = gsap.utils.toArray(`[class *= "marker-${elem.marker}"]`)

        elem.scrollName.addListener(({ offset }) => {
            gsap.set(markers, {marginTop: -offset.y})
        })
    }
})