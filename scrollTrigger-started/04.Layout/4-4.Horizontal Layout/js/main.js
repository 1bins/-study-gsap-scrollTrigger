gsap.defaults({ease: 'none'});


/**
 * 1번째 방법
 */
// const horizontal = gsap.to('.wrapper', {
//     x: (_, t) => {
//         return -(t.scrollWidth - innerWidth)
//     }
// })

// ScrollTrigger.create({
//     trigger: '.hero',
//     start: 'top top',
//     end: () => `+=${innerHeight * 2}`,
//     animation: horizontal,
//     pin: true,
//     markers: true,
//     scrub: true,
// })

/**
 * 2번째 방법
 */
const sections = gsap.utils.toArray('.section');

const tween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    scrollTrigger: {
        trigger: '.hero',
        end: () => `+=${innerWidth * 2}`,
        scrub: 1,
        pin: true,
    }
})

ScrollTrigger.create({
    trigger: '.section02',
    start: 'left center',
    end: 'right center',
    animation: gsap.to('.box', {rotation: 360}),
    containerAnimation: tween,
    // pin: false,
    horizontal: true,
    markers: true,
    scrub: true,
})






markers()