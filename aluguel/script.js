//recebe os parametros
const urlParams = new URLSearchParams(window.location.search);



//constroi uma constante 'gameDetail' com outras variaveis dentro tornando possivel o uso nesse script
const gameDetails = {
    nome: urlParams.get('nome') || 'Nome do Jogo',
    imagem: urlParams.get('imagem') || 'imagem_padrao.jpg',
    descricao: urlParams.get('descricao') || 'Descrição padrão do Jogo.',
    precoPorDia: parseFloat(urlParams.get('preco')) || 0.00
};

//exibe os dados recebidos em outro hml
document.getElementById('game-details').innerHTML = `
    <img src="${gameDetails.imagem}" alt="${gameDetails.nome}">
    <div class="game-info">
        <h3>${gameDetails.nome}</h3>
        <p>${gameDetails.descricao}</p>
        <p><br>Preço do aluguel por dia: R$ ${gameDetails.precoPorDia.toFixed(2)}</p>
    </div>
`;

// função que verifica se as datas são datas válidas e se tudo for validado, verifica através de outra função a quantidade de dias e calcula o preço total
function calcularPreco() {
    
    const PrecoTotalElemento = document.getElementById('PrecoTotal');
    const PrecoPorDia = parseFloat(getUrlParameter('preco'));
    const DataAtual = new Date();
    const DataInicio = new Date(document.getElementById('DataDeInicio').value);
    const DataFim = new Date(document.getElementById('DataDeFim').value);
    
    
    if (DataInicio && DataFim) {
 
        
        if (DataInicio < DataAtual ) {
            alert('A data de início não pode ser anterior ou igual à data atual.');
            return ;

        }
        

        if (DataFim <= DataInicio) {
            alert('A data de fim deve ser posterior à data de início.');
            return;
        }

        const DiferencaDias = calcularDiferencaDias(DataInicio, DataFim);
        const precoTotal = PrecoPorDia * DiferencaDias;

        PrecoTotalElemento.textContent = `R$ ${precoTotal.toFixed(2)}`;
    } else {
        alert('Por favor, selecione as datas de início e fim do aluguel.');
    }
}


//função para trazer apenas um atributo de outro html
function getUrlParameter(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

//função que calcula a quantidade de dias 
function calcularDiferencaDias(DataInicio, DataFim) {
    const inicio = new Date(DataInicio);
    const fim = new Date(DataFim);
    const tempoDiferenca = fim - inicio;
    return Math.ceil(tempoDiferenca / (1000 * 60 * 60 * 24));
}

// Função para compartilhar no Facebook
function compartilharNoFacebook() {
    var url = window.location.href;
    var textoCompartilhamento = 'Confira este incrível site! #MeuSite'; //não funciona para esse site
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url) + '&quote=' + encodeURIComponent(textoCompartilhamento), '_blank');
}

// Função para compartilhar no Twitter
function compartilharNoTwitter() {
    var url = window.location.href;
    var textoCompartilhamento = 'Confira este incrível site! #MeuSite'; 
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(textoCompartilhamento), '_blank');
}

// Função para compartilhar no Instagram (direciona para a página inicial, o Instagram não fornece API como o das outras redes)
function compartilharNoInstagram() {
    var url = window.location.href;
    var textoCompartilhamento = 'Confira este incrível site! #MeuSite';
    window.open('https://www.instagram.com/?url=' + encodeURIComponent(url) + '&caption=' + encodeURIComponent(textoCompartilhamento), '_blank');
}