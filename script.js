//inicia uma variavel de contagem
let count = 1;

//inicializa quando o primeiro estiver selecionado
document.getElementById("radio1").checked = true

//cria uma função com intervalo de 5000 milisegundos (5segundos)
setInterval(function(){
   nextImage(); 
},5000)

//função que vai para a proxima imagem 
function nextImage() {
    count ++;
    if(count>4){
        count = 1;
    }
//exibe conforme o contador 
    document.getElementById("radio" +count).checked = true
}

