const password = document.getElementById('password')
const icon = document.getElementById('icon')

function showHide(){ //conexão com html
    if(password.type === 'password'){ 
        password.setAttribute('type', 'text') //mostrar
        icon.classList.add('hide')

    }else{
        password.setAttribute('type', 'password') //esconder
        icon.classList.remove('hide')
    }
}