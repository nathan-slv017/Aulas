/*fetch('pessoas.json')
    .then(resultado => resultado.json())
    .then(json => gerarTabela(json));
*/

axios('pessoas.json')
    .then(resultado => gerarTabela(resultado.data));

function gerarTabela(json){
    const table = document.createElement('table');
    for(pessoa of json){
        
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        td1.innerHTML = `nome: ${pessoa.nome}`
        tr.appendChild(td1)

        const td2 = document.createElement('td');
        td2.innerHTML = `email: ${pessoa.email}`
        tr.appendChild(td2)

        const td3 = document.createElement('td1');
        td3.innerHTML = `salário: R$${pessoa.salario}.00`
        tr.appendChild(td3)

        table.appendChild(tr)
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
}