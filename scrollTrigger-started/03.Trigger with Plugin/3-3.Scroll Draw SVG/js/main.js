gsap.defaults({ease: 'none'})

/**
 * 플러그인 없이 사용하는 방법
 */

// function drawSVG(element){
    
//     let pathLength;
//     /** 콤마값으로 사용하는 방법 */
//     if(element.includes(',')){
//         const arr = element.split(',').map((target) => {
//             pathLength = document.querySelector(target).getTotalLength();
//             gsap.set(element, {
//                 strokeDashoffset: pathLength,
//                 strokeDasharray: pathLength
//             })
//             return pathLength
//         })
//         return arr;
//     }

//     pathLength = document.querySelector(element).getTotalLength();

//     gsap.set(element, {
//         strokeDashoffset: pathLength,
//         strokeDasharray: pathLength
//     })

//     return pathLength;
// }

// drawSVG('.path')
// gsap.to('.path', {strokeDashoffset: 0})


const pulse = gsap.timeline({
    defaults: {
        transformOrigin: 'center',
        ease: 'elastic(2.5, 1)',
        autoAlpha: 1,
        scale: 1.8,
    }
})
.to('.ball02, .text01', {}, 0.84)
.to('.ball03, .text02', {}, 1.26)
.to('.ball04, .text03', {}, 1.92)

const line = gsap.timeline()
.from('.line01', {drawSVG: 0}, 0.84)
.from('.line02', {drawSVG: 0}, 1.26)
.from('.line03', {drawSVG: 0}, 1.92)
.from('.line04', {drawSVG: 0}, 2.46)
.from('.line05', {drawSVG: 0}, 3.08)


const master = gsap.timeline()
.to('.ball01', {autoAlpha: 1, duration: 0.05})
.from('.path', {drawSVG: 0, duration: 4}, 0)
.to('.ball01', {
    motionPath: {
        path: '.path',
        align: '.path',
        alignOrigin: [0.5, 0.5]
    },
    duration: 4
}, 0)
.add(pulse, 0)
.add(line, 0)

ScrollTrigger.create({
    trigger: '#svg',
    start: 'top center',
    end: 'bottom center',
    animation: master,
    scrub: true,
})







// ScrollTrigger.create({
//     trigger: '',
//     start: 'top top',
//     end: 'bottom bottom',
//     animation: animation,
//     pin: false,
//     markers: true,
//     scrub: true,
// })



GSDevTools.create()
markers()