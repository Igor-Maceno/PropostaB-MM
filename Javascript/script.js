if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado!');
    window.location.href='login.html'
}
let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');
logado.innerHTML = userLogado.nome;

function sair(){
    localStorage.removeItem('token');
    localStorage.removeItem('userLogado');
    window.location.href='login.html'
}
'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)