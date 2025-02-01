//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
    if(document.getElementById('amigo').value == ''){
        alert('Por favor, insira um valor válido')
    }else{
    amigos.push(document.getElementById('amigo').value)
    document.getElementById('amigo').value = '';
    }
}
function sortearAmigo(){
    let indexSorteado = Math.floor(Math.random() * amigos.length)
    document.getElementById('resultado').innerHTML = "O  amigo secreto sorteado é " + amigos[indexSorteado]
}
