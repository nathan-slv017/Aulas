let n = 0;
function precionandoTeclas(){
    
    const teclasSuportadas = {
        ArrowUp : function(){
            document.querySelector('h2').innerHTML = 'ArrowUp';
        },
        ArrowLeft : function(){
            document.querySelector('h2').innerHTML = 'ArrowLeft';
        },
        ArrowRight : function(){
            document.querySelector('h2').innerHTML = 'ArrowRight';
        },
        ArrowDown : function(){
            document.querySelector('h2').innerHTML = 'ArrowDown';
        },
        a: function() {
            document.querySelector('h2').innerHTML = 'Um simples A ' + "clicado " + n
            n++
        },
        b: function() {
            console.log('Um simples B');
        }
    }
   

    document.querySelector('body').addEventListener('keyup', (e) =>{
        const tecla = e.key
        if(teclasSuportadas[tecla] != null) teclasSuportadas[tecla](); 
    });

};
precionandoTeclas();
