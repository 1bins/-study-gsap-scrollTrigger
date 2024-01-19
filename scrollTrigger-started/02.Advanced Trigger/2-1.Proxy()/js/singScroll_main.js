/**
 * scroller setting
 */
gsap.registerPlugin(ScrollTrigger);
const container = document.querySelector('#container');
const scrollbar = Scrollbar.init(container, {
    damping: 0.08,
    alwaysShowTracks: true
});
ScrollTrigger.scrollerProxy(container, {
    scrollTop(value){
        if(arguments.length){
            scrollbar.scrollTop = value;    // setter
        }
        return scrollbar.scrollTop; // getter
    }
});
scrollbar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({scroller: container});



ScrollTrigger.create({
    trigger: '.section02',
    start: 'top center',
    end: 'bottom center',
    markers: true,
    scrub: 1,
    animation: gsap.to('.section02 h2', {x: 500}),
})



// markers 고정 => 항상 스크롤 트리거 밑에
if(document.querySelector('.gsap-marker-scroller-start')){
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]')

    scrollbar.addListener(({ offset }) => {
        gsap.set(markers, {marginTop: -offset.y})
    })
}