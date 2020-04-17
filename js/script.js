window.onbeforeunload = function () {  //IR PARA O TOPO QUANDO RECARREGAR
    window.scrollTo(0, 0);
  }


document.getElementById('btnComecar').addEventListener('click' , function (){ //Usuario aceitar teste e mudar divs
    const div1 = document.querySelector('div.teste__antes')
    const div2 = document.querySelector('div.teste__depois')
    div1.style.display= 'none'
    div2.style.display= 'block'
    for(i = 0; i <= 11; i++){
       document.getElementsByClassName('btnResposta')[i].checked = false
    }
})



document.querySelector('input.btnVoltar').addEventListener('click' , resetForm)
document.querySelector('input.btnVoltar__2').addEventListener('click' , resetForm)

function resetForm(){ //Voltar para o aviso
    const div1 = document.querySelector('div.teste__antes')
    const div2 = document.querySelector('div.teste__depois')
    const div3 = document.querySelector('div.teste__resultado')
    div1.style.display= 'block'
    div2.style.display= 'none'
    div3.style.display = 'none'
}


//Algoritimo resposta do teste
document.getElementById('btnEnviar').addEventListener('click' , function (){
        let pergunta1 = document.teste__formulario.teste__pergunta1.value
        let pergunta2 = document.teste__formulario.teste__pergunta2.value
        let pergunta3 = document.teste__formulario.teste__pergunta3.value
        let pergunta4 = document.teste__formulario.teste__pergunta4.value
        let pergunta5 = document.teste__formulario.teste__pergunta5.value
        let pergunta6 = document.teste__formulario.teste__pergunta6.value
        let quantidade = 0
    
        if(pergunta1 === "Sim"){
            quantidade++
        }
        if(pergunta2 === "Sim"){
            quantidade++
        }
        if(pergunta3 === "Sim"){
            quantidade++
        }
        if(pergunta4 === "Sim"){
            quantidade++
        }
        if(pergunta5 === "Sim"){
            quantidade++
        }
        if(pergunta6 === "Sim"){
            quantidade++
        }
        const res1 = document.querySelector('p#res1')
        const res2 = document.querySelector('p#res2')
        const div2 = document.querySelector('div.teste__depois')
        const div3 = document.querySelector('div.teste__resultado')
        div3.style.display = 'block'
        div2.style.display= 'none'
        res1.innerHTML='Olá meu amigo! Você está enfrentando <span style="font-weight:bold;color:red;">'+ quantidade + '</span> dos 6 principais sintomas do coronavírus.<hr>'
        res2.innerHTML=(`A sua chance de estar infectado é de: <span style="font-weight:bold;color:red;">${parseInt(((quantidade / 6) *100))}</span>% <hr>`)
})