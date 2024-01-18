// gsap.to('.textContainer', {
//     x(){
//         return - (this.targets()[0].offsetWidth - innerWidth)
//         // this는 tween을 반환
//         // this.targets() => [div.wrapper.textContainer, div.wrapper.textContainer]
//     },
//     scrollTrigger: {
//         trigger: '.demo-text',
//         start: '20% center',
//         end: '80% center',
//         markers: true,
//         scrub: 1,   // true도 있지만 숫자를 넣어주면 더 부드러운 느낌이 남 (많이는 안하고 1~2) 클수록 애니메이션이 느려짐
//         // onScrubComplete(){console.log("?")},  // 스크럽 값이 숫자일 때만 사용가능
//     }
// })


// const textTween = gsap.to('.textContainer', {
//     x(){
//         return - (this.targets()[0].offsetWidth - innerWidth)
//     }
// })
// ScrollTrigger.create({
//     trigger: '.demo-text',
//     start: '20% center',
//     end: '80% center',
//     // markers: true,
//     scrub: 1,  
//     animation: textTween,
// })

// const imgTween = gsap.from('.imageContainer', {
//     x(){
//         return - (this.targets()[0].offsetWidth - innerWidth)
//     }
// })
// ScrollTrigger.create({
//     trigger: '.demo-image',
//     start: '20% center',
//     end: '80% center',
//     markers: true,
//     scrub: 1,
//     animation: imgTween,
// })

gsap.utils.toArray('.section').forEach((section, index) => {
    
    const w = section.querySelector('.wrapper');
    
    if(w){
        let [x, xEnd] = index % 2 ? [0, (w.offsetWidth - innerWidth) * -1] : [-w.offsetWidth + innerWidth, 0];

        gsap.fromTo(w, {
            x // x: x (shorthand property)
        }, {
            x: xEnd,
            scrollTrigger: {
                trigger: section,
                scrub: 1,
                start: '20% center',
                end: '80% center',
                markers: true,
            }
        })
    }

})