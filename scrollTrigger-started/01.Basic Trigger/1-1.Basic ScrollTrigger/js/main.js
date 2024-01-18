/**
 * scrollTrigger 사용 방법
 * 1) tween 안에 연결해서 사용
 * 2) 생성자로 만들어서 사용
 * 
 */

// 1) tween 안에 연결해서 사용
// gsap.to('.tiger', {
//     x: 500,
//     rotation: 360,
//     duration: 3,
//     scrollTrigger: {
//         trigger: '.tigerSection',     // 현재 애니메이션이 누구를 기준으로 애니메이션을 시작할 거냐
//         start: 'top center',    // 앞) 트리거 / 뒤) 뷰포트(브라우저창)
//         end: 'bottom 10%',
//         markers: true,
//         id: 'tiger' // 마커에 아이디부여 => scroll-start-tiger
//     }
// })

// 2) 생성자로 만들어서 사용
const tween = gsap.to('.tiger', {
    x: 500,
    rotation: 360,
    duration: 3,
})
ScrollTrigger.create({
    trigger: '.tigerSection',
    start: 'top center',
    end: 'bottom 25%',
    markers: true,
    animation: tween,
                // enter leave enterBack(end끼리 아래에서 위로 만날때) leaveBack(start끼리 아래에서 위로 만날때)
    toggleActions: 'play pause reverse pause',
})