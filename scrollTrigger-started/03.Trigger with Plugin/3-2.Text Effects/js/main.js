let split;

function init(){

    split = new SplitText('p', {type: 'lines'});
    const splitCover = new SplitText('p', {type: 'lines', linesClass: 'cover'})

    split.lines.forEach((line, index) => {

        ScrollTrigger.create({
            trigger: splitCover.lines[index],
            start: 'top 90%',
            end: 'bottom center',
            animation: gsap.from(line, {
                y: 300,
                opacity: 0,
                filter: 'blur(7px)',
                // transformOrigin: '50% 50% -50',
                // rotateX: -180
            }),
            markers: true,
            scrub: 1,
        })
    
    })

    markers()
}

/**
 * debounce
 * 입력이 끝났을 때 값을 실행
 */
const debounce = (callback, time = 500) => {
    let timeOut;
    return function(...args){
        clearTimeout(timeOut)
        timeOut = setTimeout(() => {
            callback.apply(this, args)
        }, time)
    }
}


function killAll(){
    split.revert();
    ScrollTrigger.getAll().forEach(item => item.kill());
    init()
}


window.addEventListener('load', init)
window.addEventListener('resize', debounce( killAll , 1000))