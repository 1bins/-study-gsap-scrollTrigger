const progress = document.querySelector('.progress');

ScrollTrigger.create({
    trigger: '.progressHolder',
    start: `top ${document.querySelector('.section01').offsetHeight - 150}`,
    endTrigger: '.section03',
    end: 'bottom bottom',   // section03의 bottom, window의 bottom
    animation: gsap.to(progress, {scaleX: 1, ease: 'none'}),
    onUpdate: ({ progress }) => {
        document.querySelector('.percent span').textContent = Math.round(progress * 100);
    },
    once: true, // 애니메이션을 한 번만 실행하고 반복 없이 트윈을 kill함
    pin: true,
    // markers: true,
    scrub: true
})

const circle = document.querySelector('.circleContainer circle');
const rect = document.querySelector('.rectContainer rect');

const circleLength = circle.getTotalLength() + 1;
const rectLength = rect.getTotalLength() + 1;

gsap.set(circle, {
    strokeDashoffset: circleLength,
    strokeDasharray: circleLength
})
gsap.set(rect, {
    strokeDashoffset: rectLength,
    strokeDasharray: rectLength
})
// gsap.to(circle, {
//     strokeDashoffset: 0,
//     duration: 2
// })

const progressSVG = gsap.timeline({
    defaults: {
        strokeDashoffset: 0,
        ease: 'none',
    }
})
.to(circle, {})
.to(rect, {}, '<')

ScrollTrigger.create({
    trigger: '.scroll-content',
    start: 'top top',
    end: 'bottom bottom',
    animation: progressSVG,
    markers: true,
    scrub: true,
})


markers()