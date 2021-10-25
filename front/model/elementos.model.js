const tamanhoPassos = 50;
const tamanhoRaquete = 100;

function movimentos() {
    return {
        esquerda: function(xDirecao) {
            if (xDirecao > 0) {
                xDirecao = xDirecao - tamanhoPassos;
                return xDirecao;
            } else {
                return xDirecao;
            }
        },
        direita: function(xDirecao) {
            if (xDirecao + tamanhoRaquete < canvas.width) {
                xDirecao = xDirecao + tamanhoPassos;
                return xDirecao;
            } else {
                return xDirecao;
            }
        },
    }
}

function criarBola() {
    return {
        bola_xDirecao: 300,
        bola_yDirecao: 300,
        velocidadeX: (Math.random() * (8 - 4)) + 4,
        velocidadeY: (Math.random() * (8 - 4)) + 4,
    }
}

function placar() {
    return {
        pontos_player1: 0,
        pontos_player2: 0,
        marcarPontoP1: function(){
            this.pontos_player1 += 1;
            placarPlayer1.innerHTML = "Jogador 1: " + this.pontos_player1;
        },
        marcarPontoP2: function(){
            this.pontos_player2 += 1;
            placarPlayer2.innerHTML = "Jogador 2: " + this.pontos_player2; 
        },
    }
}