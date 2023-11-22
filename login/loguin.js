//cria uma contante que recebe o parametro do id password do html
const password = document.getElementById('password')

//cria uma constante que recebe o paramentro do id icon do html
const icon = document.getElementById('icon')

//função que altera o tipo do atributo conforme o click do usuario
function showHide(){ 
    if(password.type === 'password'){ 
        password.setAttribute('type', 'text') //mostrar
        icon.classList.add('hide')

    }else{
        password.setAttribute('type', 'password') //esconder
        icon.classList.remove('hide')
    }
}