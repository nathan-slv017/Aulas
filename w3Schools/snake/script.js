const player = document.querySelector('.player');
const campo = document.querySelector('.area_de_jogo');
let x = 0;
let y = 0;

const mouves = {
    "ArrowLeft": () =>{
        if(x === 0) return
        x -= 10
        player.style.backgroundColor = 'blueviolet'
        player.style.left =  x + 'px'
    },
    "ArrowUp": () =>{
        if(y === 0) return
        y -= 10
        player.style.backgroundColor = 'red'
        player.style.top =  y + 'px'
    },
    "ArrowDown": () =>{
        if(y === 390) return
        y += 10
        player.style.backgroundColor = 'green'
        player.style.top =  y + 'px'
    },
    "ArrowRight": () =>{
        if(x === 990 ) return
        x += 10
        player.style.backgroundColor = 'fuchsia'
        player.style.left =  x + 'px'
    }
};

document.addEventListener('keydown',(e) =>{
    const t = e.key;
    if(mouves[`${t}`])mouves[`${t}`]();
});


