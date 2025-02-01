# Oracle-one-Amigo-secreto-

Voce pode digitar seu nome no campo "digite um nome", após isso o nome será adicionado na lista 

![Captura de tela de 2025-02-01 10-52-39](https://github.com/user-attachments/assets/d978bd4d-e376-45ee-86e4-0984c5822fac)


Após adicionar alguns nomes vcê pode clicar em "sortear amigo" e irá aparecer o nome do sorteado

![image](https://github.com/user-attachments/assets/2f3763f7-241d-4b13-bad0-4fb1b8ba339a)


Resumo do Código 

Este código JavaScript implementa uma funcionalidade de sorteio de amigo secreto, permitindo que usuários adicionem nomes a uma lista e realizem um sorteio aleatório.
Descrição das Funções
1. adicionarAmigo()

    Verifica se o campo de entrada (input) está vazio.
    Se estiver vazio, exibe um alerta pedindo um valor válido.
    Caso contrário, adiciona o nome inserido ao array amigos e limpa o campo de entrada.

2. sortearAmigo()

    Gera um índice aleatório baseado no tamanho da lista amigos.
    Exibe na página o nome sorteado como "O amigo secreto sorteado é [Nome]".

Elementos Utilizados

    document.getElementById('amigo'): Captura o valor do campo de entrada.
    document.getElementById('resultado'): Exibe o nome sorteado na tela.
    Math.random() e Math.floor(): Utilizados para gerar um número aleatório correspondente a um índice válido da lista.


