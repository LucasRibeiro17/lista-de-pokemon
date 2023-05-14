/*alert("Olá");/* temos que colocar em aspas, usamos o alert para ver se foi linkado o JS no HTML*/

/*
    O que precisamos fazerW - quando clicarmos no botão de troca de tema temos que alterar a cor do tema página para as cores do tema ckari ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro seja aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca do tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botão de alterar tema pra lua

    - objetivo 2 - quando clicar no notão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        -passo 6 - verificar se o body já tem a classe modo-escuro
        -passo 7 - remove a classe do modo-escuro do body
        -passo 8 - trocar a imagem do botão de alterar tema pra sol
*/

// - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro seja aplicados e mudar a imagem pra lua

// - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema 

const botaoAlterarTema = document.getElementById("botao-alterar-tema"); /*o const vcê está indicando que está criando uma variavel e o = tudo oq está do lado direito eu quero jogar para variavel e o document.getElementById você está entrando na pasta documento e indo para o id*/

// - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao") /*No JS podemos usar o ponto também para abrir uma classe*/

// - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca do tema
botaoAlterarTema.addEventListener("click", () => {

    //-passo 6 - verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro"); 
    /*console.log(modoEscuroEstaAtivo); acaba sendo para teste para saber se está funcionando*/
    /*Quando utilizamos o (contains) ele informa se tem ou não tem a classe que foi solicitada, ex: console.log(body.classList.contains("modo-escuro")) true é verdadeiro e false é falso e o if informa tbm se está ok com o codigo e deixa mais limpo e mais facil de ser identificado*/

    body.classList.toggle("modo-escuro") /*O toggle é alternar, ele vai alternar entre dois estados*/

    if (modoEscuroEstaAtivo) {
        //-passo 7 - remove a classe do modo-escuro do body
       /* body.classList.remove("modo-escuro"); (Refaturar esse remove) o toggle já vai fazer esse serviço*/

        //-passo 8 - trocar a imagem do botão de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/sun.png")

    } else {
        // - passo 4 - adicionar a classe modo-escuro no body
        /*body.classList.add("modo-escuro"); (Refaturar esse add) o toggle já vai fazer esse serviço*/

        //  - passo 5 - trocar a imagem do botão de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./imagens/moon.png")

    
    }

});/*Uma função de seta*/

/*Ao finalizar o codigo temos que refaturar para eliminar linhas duplicas e melhorar o codigo e eliminar linhas e criar alguns codigos para deixar mais facil*/
