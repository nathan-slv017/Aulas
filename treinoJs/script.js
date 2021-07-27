function CriaCalculadora() {

    let display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
    }


    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const btn = e.target
            if(btn.classList.contains('btn-num'))this.btnParaDisplay(btn.innerText)
            if(btn.classList.contains('btn-clear'))this.clearBtn();
            if(btn.classList.contains('btn-del'))this.apagaUm();
            if(btn.classList.contains('btn-eq'))this.realizaConta();
        })
    }

    this.realizaConta = () =>{
        let conta = display.value;

        try{
            conta = eval(conta);
            if(!conta){
                alert('Conta invalida');
                return
            }
            display.value = String(conta);
        } catch(err){
            alert('Conta invalida');
            display.value =''
            return;
        }
    }

    this.apagaUm = () =>{
        display.value = display.value.slice(0, -1);
    }

    this.clearBtn = () =>{
        display.value = ''
    }

    this.btnParaDisplay = (value) => {
        display.value += value;
    }
}

const calc = new CriaCalculadora()
calc.inicia()