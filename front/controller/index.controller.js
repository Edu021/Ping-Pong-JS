var canvas = document.getElementById("campo");
var ctx = canvas.getContext("2d");

const iniciarBotao = document.getElementById("iniciarBotao");
const pararBotao = document.getElementById("pararBotao")
const placarPlayer1 = document.getElementById("placarPlayer1");
const placarPlayer2 = document.getElementById("placarPlayer2");

const movimento = movimentos();
var placar = placar();
var bola = criarBola();

var p1_xDirecao = 200;
var p1_yDirecao = 20;

var p2_xDirecao = 200;
var p2_yDirecao = 570;

var raio = 10



ctx.fillStyle = "rgba(175, 77, 152, 1)";
ctx.fillRect(p1_xDirecao,p1_yDirecao, tamanhoRaquete, 10);

ctx.fillStyle = "rgba(31, 109, 247, 1)"
ctx.fillRect(p2_xDirecao,p2_yDirecao, tamanhoRaquete, 10);

function desenharCanvas(cor,xDirecao,yDirecao) {
    ctx.fillStyle = cor;
    ctx.fillRect(xDirecao, yDirecao, tamanhoRaquete, 10);
}
function apagarCanvas(xDirecao,yDirecao) {
    ctx.clearRect(xDirecao, yDirecao, tamanhoRaquete, 10);
}

function desenharBola() {
    ctx.beginPath();
    ctx.arc(bola.bola_xDirecao, bola.bola_yDirecao, raio, 0, 2 * Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
}

function apagarBola() {
    ctx.beginPath();
    ctx.arc(bola.bola_xDirecao, bola.bola_yDirecao , raio, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.stroke();
}

function reiniciarRodada() {

    apagarBola()
    bola.bola_yDirecao = 300;
    bola.bola_xDirecao = 300;
    bola.velocidadeX = (Math.random() * (8 - 4)) + 4,
    bola.velocidadeY = (Math.random() * (6 - 4)) + 4,    
    console.log("começou")

}

function verificaColisaoBorda() {
    // borda dos lados
    if (bola.bola_xDirecao + raio > canvas.width || bola.bola_xDirecao - raio < 0) {
        bola.velocidadeX *= -1;
        
    }
    // borda de baixo
    if (bola.bola_yDirecao + raio > canvas.height) {
        placar.marcarPontoP1();
        reiniciarRodada()
    }
    // borda de cima
    if (bola.bola_yDirecao - raio < 0) {
        placar.marcarPontoP2();
        reiniciarRodada()
    }

}

function verificaColisaoP1() {
    if (bola.bola_yDirecao - raio < p1_yDirecao + 16 &&
        bola.bola_yDirecao  &&
        bola.bola_xDirecao + raio > p1_xDirecao &&
        bola.bola_xDirecao - raio < p1_xDirecao + tamanhoRaquete) {
            bola.velocidadeY *= -1;
            let i= Math.floor(Math.random() * 2);
            console.log(i)
            if(i == 1) {
                bola.velocidadeX *= -1;
            }
            
            
        }
}
function verificaColisaoP2() {
    if (bola.bola_yDirecao + raio > p2_yDirecao - 5 &&
        bola.bola_xDirecao + raio > p2_xDirecao &&
        bola.bola_xDirecao - raio < p2_xDirecao + tamanhoRaquete) {
            bola.velocidadeY *= -1;
            let i= Math.floor(Math.random() * 2);
            console.log(i)
            if(i == 1) {
                bola.velocidadeX *= -1;
            }
        }
}

function iniciarBola() {
    
    apagarBola()
    bola.bola_xDirecao += bola.velocidadeX;
    bola.bola_yDirecao += bola.velocidadeY;
    desenharBola()
    verificaColisaoBorda()
    verificaColisaoP1();
    verificaColisaoP2();
}

iniciarBotao.onclick = function iniciar() {

    intervalo = setInterval(iniciarBola,1000/50)

};
pararBotao.onclick = function parar() {
    clearInterval(intervalo);
}