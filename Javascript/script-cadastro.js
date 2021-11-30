let btnConfirm = document.querySelector('#verConfirmSenha');
let btn = document.querySelector('.fa-eye');

let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#LabelNome');
let validNome = false;

let email = document.querySelector('#email');
let LabelEmail = document.querySelector('#LabelEmail');
let validEmail = false;

let telefone = document.querySelector('#telefone');
let LabelTelefone = document.querySelector('#LabelTelefone');
let validTelefone = false;

let senha = document.querySelector('#senha');
let LabelSenha = document.querySelector('#LabelSenha');
let validSenha = false;

let repitsenha = document.querySelector('#repitSenha');
let LabelRepitSenha = document.querySelector('#LabelRepitSenha');
let validRepitSenha = false;

let msgError = document.querySelector('#msgError');
let msgSuccess = document.querySelector('#msgSuccess');

nome.addEventListener('keyup',()=>{
    if(nome.value.length <= 2){
        labelNome.setAttribute('style', 'color: red');
        labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres';
        validNome = false;
    }else{
        labelNome.setAttribute('style', 'color: #47AB43');
        labelNome.innerHTML = 'Nome';
        validNome = true;
    }
})
email.addEventListener('keyup',()=>{
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ||(email.value.indexOf('.') - email.value.indexOf('@') == 1)){
        LabelEmail.setAttribute('style', 'color: red');
        LabelEmail.innerHTML = 'E-mail *E-mail inválido';
        validEmail = false;
    }else{
        LabelEmail.setAttribute('style', 'color: #47AB43');
        LabelEmail.innerHTML = 'E-mail';
        validEmail = true;
    }
})
telefone.addEventListener('keyup',()=>{
    if(isNaN(telefone.value) == true || telefone.value.length != 11){
        LabelTelefone.setAttribute('style', 'color: red');
        LabelTelefone.innerHTML = 'Telefone *Número inválido';
        validTelefone = false;
    }else{
        LabelTelefone.setAttribute('style', 'color: #47AB43');
        LabelTelefone.innerHTML = 'Telefone';
        validTelefone = true;
    }
})
senha.addEventListener('keyup',()=>{
    if(senha.value.length <= 7){
        LabelSenha.setAttribute('style', 'color: red');
        LabelSenha.innerHTML = 'Senha *Insira no mínimo 8 caracteres';
        validSenha = false;
    }else{
        LabelSenha.setAttribute('style', 'color: #47AB43');
        LabelSenha.innerHTML = 'Senha';
        validSenha = true;
    }
})
repitsenha.addEventListener('keyup',()=>{
    if(senha.value != repitsenha.value){
        LabelRepitSenha.setAttribute('style', 'color: red');
        LabelRepitSenha.innerHTML = 'Confirmar senha *As senhas são diferentes';
        validRepitSenha = false;
    }else{
        LabelRepitSenha.setAttribute('style', 'color: #47AB43');
        LabelRepitSenha.innerHTML = 'Confirmar senha';
        validRepitSenha = true;
    }
})

function cadastrar(){
    if(validNome && validEmail && validSenha && validRepitSenha){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        listaUser.push({
            nomeCad: nome.value,
            emailCad: email.value,
            telefoneCad: telefone.value,
            senhaCad: senha.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        msgSuccess.setAttribute('style', 'display: block');
        msgSuccess.innerHTML = '<strong>Cadastrando...</strong>'
        msgError.setAttribute('style', 'display: none');
        msgError.innerHTML = '';

        setTimeout(()=>{
            window.location.href='login.html';
        }, 3000);
    }else{
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de continuar</strong>';
        msgSuccess.setAttribute('style', 'display: none');
        msgSuccess.innerHTML = '';
    }
}
btn.addEventListener('click', ()=>{
    let inputSenha=document.querySelector('#senha');
    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text');
    }else{
        inputSenha.setAttribute('type', 'password');
    }
})
btnConfirm.addEventListener('click', ()=>{
    let inputRepitSenha=document.querySelector('#repitSenha');
    if(inputRepitSenha.getAttribute('type') == 'password'){
        inputRepitSenha.setAttribute('type', 'text');
    }else{
        inputRepitSenha.setAttribute('type', 'password');
    }
})
