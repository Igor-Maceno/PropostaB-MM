let btnConfirm = document.querySelector('#verConfirmSenha');
let btn = document.querySelector('.fa-eye');

let usuario= document.querySelector('#usuario');
let LabelUsuario= document.querySelector('#LabelUsuario');

let password= document.querySelector('#password');
let LabelPassword= document.querySelector('#LabelPassword');

let msgFail= document.querySelector('#msgFail');

function entrar(){
    let listaUser = [];
    let userValid = {
        nome:'',
        email:'',
        senha:'',
    };
    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    
    listaUser.forEach((item) => {
        if(usuario.value == item.emailCad && password.value == item.senhaCad){
            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
            };
        };
    });
    if(usuario.value == userValid.email && password.value == userValid.senha){
        window.location.href="index.html";

        let token = Math.random().toString(16).substr(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userLogado', JSON.stringify(userValid));

    }else{
        usuario.setAttribute('style', 'color: red');
        LabelUsuario.setAttribute('style', 'color: red');
        password.setAttribute('style', 'color: red');
        LabelPassword.setAttribute('style', 'color: red');
        msgFail.setAttribute('style', 'display: block');
        msgFail.innerHTML = '<strong>E-mail ou senha incorretos</strong>';
        usuario.focus();
    }

}

btn.addEventListener('click', ()=>{
    let inputSenha=document.querySelector('#password');
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    }else{
        inputSenha.setAttribute('type', 'password');
    }
})
