const h2 = document.querySelector('.section02 h2');

gsap.to(h2, {
    x: 200,
    scrollTrigger: {
        trigger: '.section02',
        start: '20% center',
        end: '80% center',
        markers: true,
        scrub: true,
        onEnter: (e) =>{
            h2.textContent = 'enter'
        },
        onLeave: () => {
            h2.textContent = 'leave'
        },
        onEnterBack: () => {
            h2.textContent = 'EnterBack'
        },
        onLeaveBack: () => {
            h2.textContent = 'LeaveBack'
        },
        onToggle:({ direction }) => {   // onEnter, onLeave, onEnterBack, onLeaveBack을 다 가져옴
            // console.log(direction) // 스크롤 내릴때는 1을 반환, 올릴때는 -1을 반환
            if(direction === 1){
                h2.style.color = 'red'
            }else{
                h2.style.color = 'blue'
            }
        },
        onRefresh: () => {  // resize
            console.log('refresh')
        },
        onUpdate: ({progress}) => {   // 스크롤트리거가 진행되는 동안만
            let percentage = Math.round(progress * 100);
            h2.textContent = `${percentage}%`

            if(percentage >= 50){
                gsap.set('.section02', {backgroundColor: 'orange'})
            }else{
                gsap.set('.section02', {backgroundColor: '#e5c1c5'})
            }
        }
    }
})





markers()