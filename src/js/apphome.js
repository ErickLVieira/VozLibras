const botaoSinal = document.querySelectorAll(".botaosinal");
const videoSinal = document.querySelectorAll(".videosinal");

//evento clique para cada botão de sinal
botaoSinal.forEach(botaosinal => {
    //evento clique pelo usuario no botão do sinal
    botaosinal.addEventListener('click', () => {
        console.log(botaosinal)
        //remover classe VISIVEL apenas do video visivel
        const videoSinalVisivel = document.querySelector('.visivel')
        videoSinalVisivel.classList.remove('visivel')

        //ao clicar no botao pegando o ID do botão para saber qual video mostrar
        const idBotaoSelecionado = botaosinal.attributes.id.value

        //acrescentando o ID a classe video
        const idVideoParaVisivel = 'video-' + idBotaoSelecionado

        //adicionando a classe VISIVEL para o video que precisa ser mostrado
        const videoParaVisivel = document.getElementById(idVideoParaVisivel)
        videoParaVisivel.classList.add('visivel')
    })
});

//criando alerta de sinal não cadastrado.
const btTraduzir = document.getElementById("enviar")
btTraduzir.addEventListener('click', () => {
    alert("Sinal não cadastrado!")
})