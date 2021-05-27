window.addEventListener('load', () =>{
    h2.innerHTML =localStorage.getItem('textin');
    teclado.value = localStorage.getItem('textin');
});

const teclado = document.querySelector('input');
const h2 = document.querySelector('h2');

window.addEventListener('keyup', ()=>{
    h2.innerHTML = teclado.value;
    localStorage.setItem('textin', h2.innerHTML);
});




