// const tl = gsap.timeline()
// .to('.layer-bg', {y: -100})
// .to('.layer-1', {y: -50}, '<')
// .to('.layer-2', {y: -80}, '<')
// .to('.layer-3', {y: -20}, '<')
// .to('.layer-4', {y(){return -this.targets()[0].offsetHeight}, ease: 'none'}, '<')
// .to('.layer-overlay', {y: -60}, '<')

// ScrollTrigger.create({
//     trigger: '#hero',
//     start: 'top top',
//     end: 'bottom top',
//     markers: true,
//     animation: tl,
//     scrub: true,
// })

/**
 * 생성된 scrollTrigger 확인 방법
 * 콘솔 창에 ScrollTrigger.getAll() 입력
 */

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        markers: true,
        scrub: true,
    }
})

// ScrollTrigger.create({
//     trigger: '#hero',
//     start: 'top top',
//     end: 'bottom top',
//     animation: tl,
//     markers: true,
//     scrub: true
// })

gsap.utils.toArray('.parallax').forEach(layer => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth)

    tl.to(layer, {y: movement, ease: 'none'}, 0)
})