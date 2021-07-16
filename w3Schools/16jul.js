function validTime(time){
    let possivel = true
    const horas = `${time.charAt(0)}${time.charAt(1)}` * 1
    const minutos = `${time.charAt(3)}${time.charAt(4)}` * 1

    horas > 23 || minutos > 59 ? possivel = false: possivel;
    return possivel
}
const tempo = "09:56"
console.log(validTime(tempo));