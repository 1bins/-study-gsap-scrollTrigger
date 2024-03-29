const tl = gsap.timeline({
    defaults: {
        duration: 3,
        ease: 'power3.inOut',   // 고급스러운 사이트에서 많이 쓰는 ease
    }
})
.from('.image_container > div', {
    x: innerWidth,
    stagger: {
        amount: 0.5,
    },
})
.to('.image_container > div', {
    y: innerHeight * 0.2,
    stagger: {
        amount: 0.5,
        from: 2,
    }
}, '-=1.5')
.from('.text_container .elem', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: {
        each: 0.2,
        ease: 'power3.inOut'
    }
}, '-=2')

tl.eventCallback('onComplete', () => {
    gsap.set('#no-scroll', {display: 'none'})
})

ScrollTrigger.create({
    trigger: '.section01',
    start: 'top top',
    end: 'bottom top',
    animation: gsap.to('.image_container', {x: -innerWidth * 0.5}),
    scrub: true
})



markers()