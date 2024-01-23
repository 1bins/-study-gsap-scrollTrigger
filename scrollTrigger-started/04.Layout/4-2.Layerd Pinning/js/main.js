gsap.utils.toArray('.section').forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        // end: 'bottom bottom',
        // animation: gsap.to(section, {yPercent: -10}),
        pin: true,
        pinSpacing: false,
        markers: true,
        scrub: true,
        // snap: {
        //     sanpTo: 1,
        //     duration: 0.3
        // },   // section끝 쪽에 자동으로 맞춰짐
    })
})








markers()