    //cria uma função para redirecionar para receber os parametros do jogo
function RedirecioneAluguelUrl(NomeJogo, Imagemjogo, DescricaoJogo, PrecoJogo) {
    // Constrói uma URL com os parâmetros do jogo
    const aluguelUrl = `/aluguel/aluguel.html?nome=${encodeURIComponent(NomeJogo)}
                                    &imagem=${encodeURIComponent(Imagemjogo)}
                                    &descricao=${encodeURIComponent(DescricaoJogo)}
                                    &preco=${PrecoJogo}`;

    // Redireciona para a página de aluguel com os parâmetros do jogo
    window.location.href = aluguelUrl;
}
