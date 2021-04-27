function CriaCalculadora() {
    let display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();

    }
    this.clearDisplay = function () {
        display.value = ''
    }
    this.apagaUm = function () {
        display.value = display.value.slice(0, -1)
    }
    this.realizaConta = function (){
        let conta = display.value;
        try{
            conta = eval(conta)
            if(!conta){
                alert('Conta invalida');
                return;
            }
            display.value = String(conta);
        }catch(e){
            alert('Conta invalida');
            display.value = ''
            return;
        }
    }
    
    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                this.btnparaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            } if (el.classList.contains('btn-del')) {
                this.apagaUm();
            }
            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        })
        this.btnparaDisplay = (valor) => {
            display.value += valor
        }

    }
}
const calc = new CriaCalculadora()
calc.inicia();
