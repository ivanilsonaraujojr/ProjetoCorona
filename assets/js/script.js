/* By Ivanilson Junior ;)*/
//Efeito scroll suave em todos links referenciados a uma id (#)
const linkItems =  document.querySelectorAll('a[href^="#"]')
atribuirEfeitoScroll(linkItems)

//Ir para o topo quando recarregar a pagina
window.onload = function(){
	resetarInputs()
    window.scrollTo(0,0);
}

//Alterar displays
const esconderItem = (item) => item.style.display="none"
const mostrarItem = (item, valor = "block") => item.style.display=valor

//Variaveis formulario
const perguntas = document.querySelectorAll('.formulario__pergunta')
const perguntasvalor = [
    
]
const perguntasTexto = document.querySelectorAll(".pergunta__texto")
const erroParagrafo = document.querySelectorAll('.pegunta__erro')
const perguntasInputs = document.querySelectorAll(".formulario__pergunta input[type='radio']")
const testeAntes = document.querySelector('.teste__antes')
const testeDepois = document.querySelector('.teste__depois')
const testeResultado = document.querySelector('.teste__resultado')
const botaoVoltar = document.querySelector('#botaoVoltar')
const botaoRefazerTeste = document.querySelector('#refazerTeste')
const botaoProximaPergunta = document.querySelector('#proximaPergunta')
const botaoPerguntaAnterior = document.querySelector('#perguntaAnterior')
const areaResposta1 = document.querySelector('#res1')
const areaResposta2 = document.querySelector('#res2')
let perguntaAtual = 0

//Resetar os inputs
function resetarInputs(){
	for(let i = 0; i < perguntasInputs.length; i++){
	perguntasInputs[i].checked = false; 
}
}

//Perguntas com display none atraves de laço repetição
for(let f = 0;f < perguntas.length; f++){
	esconderItem(perguntas[f])
}
//Botao refazer teste
botaoRefazerTeste.addEventListener("click", function(){
	esconderItem(testeResultado)
	mostrarItem(testeAntes)
	resetarInputs()
  perguntaAtual = 0
})

//Botao voltar
botaoVoltar.addEventListener("click", function(){
  for(let i = 0; i < erroParagrafo.length; i++){
     esconderItem(erroParagrafo[i])
  }
	esconderItem(testeDepois)
	mostrarItem(testeAntes)
	resetarInputs()
})
//Função responsavel pela alteracoes das divs das perguntas
function mostrarPergunta(perguntaAtual) {
	esconderItem(testeAntes)
	mostrarItem(testeDepois)

  	mostrarItem(perguntas[perguntaAtual])

  	if (perguntaAtual == 0) {
  	esconderItem(botaoPerguntaAnterior)
  	mostrarItem(botaoVoltar, "inline")
  } else {
  	mostrarItem(botaoPerguntaAnterior, "inline")
  	mostrarItem(botaoProximaPergunta, "inline")
  	esconderItem(botaoVoltar)
  }
  	if (perguntaAtual == (perguntas.length - 1)) {	
    botaoProximaPergunta.value = "Enviar as respostas";
  } else{
  	botaoProximaPergunta.value = "Proxima pergunta";
  }
}

//Função do botão proxima pergunta
function perguntaSeguinte(n) {
 	if(validarFormulario(perguntaAtual)){
 	esconderItem(perguntas[perguntaAtual])
  	perguntaAtual += n;
  }
  	if (perguntaAtual >= perguntas.length) {
  	//Resultado entra aqui
  	esconderItem(testeDepois)
    calcularResultado()
  	mostrarItem(testeResultado)
    return false;
  }
  	mostrarPergunta(perguntaAtual);
}

//Função do botão pergunta anterior
function perguntaAnterior(n){
 	esconderItem(perguntas[perguntaAtual])
 	perguntaAtual += n;
 	mostrarPergunta(perguntaAtual);
}

//Todos inputs separados  
const todosInputs = [
	document.depois__formulario.formulario__pergunta1,
	document.depois__formulario.formulario__pergunta2,
	document.depois__formulario.formulario__pergunta3,
	document.depois__formulario.formulario__pergunta4,
	document.depois__formulario.formulario__pergunta5,
	document.depois__formulario.formulario__pergunta6
]

//Validação do formulario
function validarFormulario(valor) {
    let inputsRadios = todosInputs[valor]

    let formularioValido = true;
    esconderItem(erroParagrafo[valor])
    if(!inputsRadios[0].checked && !inputsRadios[1].checked){
    	formularioValido = false;
    	mostrarItem(erroParagrafo[valor], "block")
    }
    return formularioValido;
}

//Função resposavel pelo resultado do teste
function calcularResultado(){
  let qtd = 0
  let chance = ''
  for(let i = 0; i < todosInputs.length; i++){
    if(todosInputs[i].value == "Sim"){
      qtd++
    } 
  }
  let porcentagemInfeccao = parseInt(((qtd / 6) * 100))
    if(porcentagemInfeccao <= 33){
      chance = 'MUITO BAIXA'
    }else if(porcentagemInfeccao < 66){
      chance = 'ALTA'
    }else{
      chance = 'MUITO ALTA'
  } 
  areaResposta1.innerHTML='Olá meu amigo! Você está enfrentando <span style="font-weight:bold;color:red;">'+ qtd + '</span> dos 6 principais sintomas do coronavírus.'
  areaResposta2.innerHTML=(`A sua chance de estar infectado é <span style="font-weight:bold;color:red;">${chance}</span> <hr>`)
}