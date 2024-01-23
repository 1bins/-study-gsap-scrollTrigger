const state = {
    isPlaying: true,
}

let currentPageIndex = 1;

const sections = gsap.utils.toArray('.section');


const pages = {
    page01: {
        enter:() => {
            console.log('enter page01')
        },
        leave:() => {
            console.log('leave page01')
        }
    },
    page02: {
        enter:() => {
            console.log('enter page02')
        },
        leave:() => {
            console.log('leave page02')
        }
    },
    page03: {
        enter:() => {
            
            if(!ScrollTrigger.getById('section03')){
                ScrollTrigger.create({
                    trigger: '.depth_wrapper',
                    start: 'top top',
                    end: 'bottom bottom',
                    markers: true,
                    id: 'section03',
                    onLeave: () => {
                        transition(4)
                    },
                    onLeaveBack: () => {
                        transition(2)
                    }
                })
    
                markers()
            }
        },
        leave:() => {
            console.log('leave page03')
        }
    },
    page04: {
        enter:() => {
            console.log('enter page04')
        },
        leave:() => {
            console.log('leave page04')
        }
    }
}

function transition(index, dir){

    const { page01, page02, page03, page04 } = pages;

    currentPageIndex = index;

    gsap.to('.wrapper', {
        y: -innerHeight * (index - 1),
        duration: 1.2,
        ease: 'expo.inOut',
        onStart: () => {
            switch(dir === "up" ? index + 1 : index - 1){
                case 1: page01.leave(); break;
                case 2: page02.leave(); break;
                case 3: page03.leave(); break;
                case 4: page04.leave(); break;
            }
        },
        onComplete: () => {
            state.isPlaying = true

            switch(index){
                case 1: page01.enter(); break;
                case 2: page02.enter(); break;
                case 3: page03.enter(); break;
                case 4: page04.enter(); break;
            }
        }
    })
}

function handlewheel({ deltaY }){

    let direction = deltaY < 0 ? "up" : "down"

    if(state.isPlaying){

        state.isPlaying = false;

        if(currentPageIndex === 3) return;

        if(direction === "up"){
            if(currentPageIndex <= 1) return
            --currentPageIndex
        }else{
            if(currentPageIndex >= sections.length) return
            ++currentPageIndex
        }
    
        transition(currentPageIndex, direction)
    }
    
}

container.addEventListener('wheel', handlewheel)

markers()