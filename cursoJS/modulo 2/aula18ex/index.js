
const elemento = [
    {tag: 'p', texto: 'Frase1'},
    {tag: 'div', texto: 'Frase2'},
    {tag: 'footer', texto: 'Frase3'},
    {tag: 'section', texto: 'Frase4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elemento.length; i++){
    let {tag, texto} = elemento[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);