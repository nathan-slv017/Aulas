let container = document.querySelector('.container');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
h1.innerHTML = 'pipi';
h2.innerHTML = 'popo';
h3.innerHTML = 'pupu';

container.appendChild(h1);
container.appendChild(h2);
container.removeChild(h1);


container.replaceChild(h3, h2);

