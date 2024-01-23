const state = {
    mobile: '500px',
    pc: '501px',
}

const { pc, mobile } = state;

const box = document.querySelector('.box');

// gsap.to(box, {
//     x: '100vw',
//     xPercent: -100,
//     yoyo: true,
//     repeat: -1,
//     duration: 2,
//     ease: 'power3.inOut'
// })

const mm = gsap.matchMedia();

// mm.add(`(max-width: ${mobile})`, (context) => {

//     // context에 spin함수 추가
//     context.add('spin', () => {
//         gsap.to(box, {
//             rotation: 360,
//             duration: 2,
//             repeat: -1,
//             ease: 'none'
//         })
//     })

//     // spin함수 작동
//     box.addEventListener('click', context.spin)

//     // 클린업 코드: 창을 키웠을때 spin함수 제거
//     return() => {
//         box.removeEventListener('click', context.spin)
//     }

// })

const options = {
    isMobile: '(max-width: 500px)',
    isDesktop: '(min-width: 501px)'
}

// mm.add(options, (context) => {
//     const { isMobile, isDesktop } = context.conditions;

//     gsap.to(box, {
//         rotation: isMobile ? 360 : -360,
//         duration: 2,
//     })
// })

const wrapper = document.querySelector('.wrapper');

mm.add(options, (context) => {
    const { isMobile, isDesktop } = context.conditions;

    gsap.to('.green', {
        rotation: isMobile ? 360 : -360
    })
}, wrapper)
// => 스코프를 많이 사용하게 될 경우 gsap.matchMedia(wrapper)로 기본 스코프를 설정할 수 있음