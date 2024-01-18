const { chars } = new SplitText('.banner .target', {type: 'chars'});

const tl = gsap.timeline()
.from('.tiger', {duration: 4, scale: 0, ease: 'back(3)'})   // 애니메이션에 duration을 주면 스크롤에 따른 지분율을 준다 => 80%
.from(chars, {duration: 1, y: 60, opacity: 0, ease: 'back(3)', stagger: 0.1}) // => 20%


ScrollTrigger.create({
    trigger: '.banner',
    start: 'top center',
    end: '200% center',
    // end: '+=1000 center',  // 원래크기에서 1000픽셀을 더하겠다
    // markers: true,
    pin: true,  // 핀은 보통 부모에게 주는걸 추천
    // pinSpacing: false      // 밑에 공간을 없애고 trigger가 아래 컨텐츠 위에 올라온다 (헤더 느낌)
    // pinType: 'transform', // 기본값은 fixed, transform의 경우 transform Y값으로 고정되는 느낌이난다.
    animation: tl,
    scrub: 1
})

ScrollTrigger.create({
    trigger: '.section03',
    start: 'top',   // 동일 값일 경우 뒤에 생략가능
    end: '+=2000',
    animation: gsap.to('.section03 h2', {rotation: 360}),
    scrub: 1,
    markers: true,
    pin: true
})