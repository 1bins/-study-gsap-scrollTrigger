const goToTop = gsap.timeline()
.to('.goToTop img', {y: 0, opacity: 1, ease: 'back(3)'})
.to('.goToTop a', {y: 0, opacity: 1, ease: 'back(3)'})

ScrollTrigger.create({
    trigger: '.scroll-content',  // smooth scrollbar API에서 만들어진 것 <main> 느낌
    start: '75% center',
    end: 'bottom center',
    markers: true,
    animation: goToTop,
    toggleActions: 'play none none reverse',
    toggleClass: {
        targets: ['.goToTop', '.scroll-content'],
        className: 'active' // 다중 클래스는 지원안함, 콜백함수를 사용해서 넣어야함
    },
    fastScrollEnd: true     // scrub을 활성화한 애니메이션은 사용불가능
})

const topBtn = document.querySelector('.goToTop');

topBtn.addEventListener('click', () => {
    const section2 = document.querySelector('.section02')
    scrollbar.scrollTo(0, 0, 600, {     // x, y, speed, callback
        callback:() => {
            console.log('done')
        }
    })
})


markers()