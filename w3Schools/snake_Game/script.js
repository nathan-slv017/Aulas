const snake = document.querySelector('.snake');
let left = 0;
let down = 0;
const controles = {
    "ArrowUp" : () =>{
        if(snake.style.top === '0px') return;
        down -= 15;
        snake.style.top = down + 'px';
    },
    "ArrowRight" : () =>{
        if(snake.style.left === '555px') return;
        left += 15;
        snake.style.left = left + 'px'
    },
    "ArrowDown" : () =>{
        if(snake.style.top === '255px') return;
        down += 15;
        snake.style.top = down + 'px';
    },
    "ArrowLeft" : () =>{
        if(snake.style.left === '0px') return;
        left -= 15;
        snake.style.left = left + 'px'
    }
};

document.addEventListener('keyup', (e) =>{
    const tecla = e.key;
    if(controles[`${tecla}`]) controles[`${tecla}`]()
});

function iniciar(){
    setInterval(() =>{
        console.log(123)
    }, 1000)
}

/*
ArrowUp
ArrowRight
ArrowDown
ArrowLeft
*/