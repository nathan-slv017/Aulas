document.addEventListener('keypress', (e) =>{ 
    keyPressEvent.oiTest(e);

});


keyPressEvent = {
    oiTest: (e) =>{
        const div = document.querySelector('.menssage')
        const classUm = document.createElement('div');
        const classDois = document.createElement('div');
        const classTres = document.createElement('div');
        classUm.innerText = `| ${e.code} |`
        classDois.innerText = `| ${e.charCode} |`
        classTres.innerText = `| ${e.key} |`
        div.innerText =''
        div.appendChild(classUm);
        div.appendChild(classDois);
        div.appendChild(classTres);
        console.log(e.key)
    }
}