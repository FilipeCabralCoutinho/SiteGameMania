// Função para mostrar o menu ao clicar no Menu de barras
$(document).ready(function(){
    $("#barras").click(function(){
        let menu = $("#menu")

        if($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
        }
    })
})

// Função para mostrar mais produtos em destaques na versão mobile

    function vejaMais(){
        let destaqueEscondido1 = document.getElementById("esconder-destaque-1")
        let destaqueEscondido2 = document.getElementById("esconder-destaque-2")
        let botaoVejaMais = document.getElementById("botao-veja-mais")
        let destaques = document.getElementById("destaques")
        let aumentarMain = document.getElementById("fundo-main")

        if (getComputedStyle(destaqueEscondido1).display == 'none') {
            destaqueEscondido1.style.display = 'flex';
            destaqueEscondido2.style.display = 'flex';
            botaoVejaMais.style.display = 'none';
            destaques.style.height = '1050px';
            aumentarMain.style.height = '2500px';
        }
    }

// TELA DE LOGIN

function login() {
    let email = document.getElementById("email").value
    let senha = document.getElementById("password").value

    console.log(email)
    console.log(senha)

    }