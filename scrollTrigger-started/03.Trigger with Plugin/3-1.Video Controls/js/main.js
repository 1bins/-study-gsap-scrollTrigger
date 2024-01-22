// const value = {
//     number: 0
// }

// gsap.to(value, {
//     number: 141,
//     duration: 3,
//     ease: 'none',
//     snap: 'number',
//     onUpdate: () => {
//         console.log(value.number)
//     }
// })


/**
 * snap 플러그인
 */
// gsap.to('.box', {
//     x: 500,
//     duration: 3,
//     snap: {
//         // x: 30      // 30씩 이동함
//         x: [0, 50, 150, 200, 500]   // 정해진 값만큼 이동
//         // x: {values: [0, 50, 150, 500], radius: 20}   // 20의 근사치(0, 30, 130, 480)에 도착하면 values에 바로 이동
//     }
//     // snap: 'x',  // 정수값만 반영됨
// })






// const video = document.querySelector('#video');

// ScrollTrigger.create({
//     trigger: '.section03',
//     start: 'top center',
//     end: 'bottom center',
//     markers: true,
//     onToggle: ({ isActive }) => {
//         isActive ? video.play() : video.pause()
//     }
// })

document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const frameCount = 141;

const currentFrame = (index) => {
    return `./assets/frames/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.jpg`
}

// const images = [];
// for(let i = 0; i < frameCount; i++){
//     const img = new Image();
//     img.src = currentFrame(i)
//     images.push(img)
// }

const images = Array(frameCount).fill(null).map((_, index) => {
    const img = new Image();
    img.src = currentFrame(index);
    return img
})

const videoSection = {
    frame: 0
}

const tl = gsap.timeline()
.to(videoSection, {frame: frameCount - 1, snap: 'frame', ease: 'none'})
.fromTo('#canvas', {filter: 'brightness(0)'}, {filter: 'brightness(2)', scale: 3}, 0)

ScrollTrigger.create({
    trigger: '.section02',
    start: 'top top',
    end: '+=3000',
    animation: tl,
    pin: true,
    scrub: 1,
    onUpdate: render
})

// gsap.to(videoSection, {
//     frame: frameCount - 1,
//     snap: 'frame',
//     ease: 'none',
//     onUpdate: render,
//     scrollTrigger: {
//         trigger: '.section02',
//         start: 'top top',
//         pin: true,
//         end: '+=3000',
//         scrub: true,
//     }
// })

images[0].onload = render

function render(){
    ctx.drawImage(images[videoSection.frame], 0, 0);
}



markers()