// jQuery
$(document).ready(function(){
    $('#menu').click(function(){
        $('#opcao').slideToggle('slow');        
    })
})

$(document).ready(function(){
    $('#log').click(function(){
        $('#divx').slideToggle('slow');        
    })
})

$(document).ready(function(){
    $('#b1').click(function(){
        $('#im').attr('src', 'aguia.jpg');
    });
});

// JavaScript
class Usuario {
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

/*let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let senha = document.getElementById('senha').value;*/



const  aluno = new Usuario();
const x = (nome, email, senha) => aluno = new Usuario(nome, email, senha)

console.log(x.nome);

/*const btn = document.querySelector('#b1')
const img = document.querySelector('img');*/

