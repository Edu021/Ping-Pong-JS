// player 1
document.body.addEventListener('keydown', function (event) { /* keydown/keypress */
    const key = event.key;

    switch(key) {
        case "ArrowLeft":
            p1_xDirecao = movimento.esquerda(p1_xDirecao);
            desenharCanvas("rgba(175, 77, 152, 1)",p1_xDirecao,p1_yDirecao);
            apagarCanvas(p1_xDirecao + tamanhoRaquete,p1_yDirecao);
            return p1_xDirecao;
        case "ArrowRight":
            p1_xDirecao = movimento.direita(p1_xDirecao);
            desenharCanvas("rgba(175, 77, 152, 1)",p1_xDirecao,p1_yDirecao);
            apagarCanvas(p1_xDirecao - tamanhoRaquete,p1_yDirecao);
            return p1_xDirecao;
    }
})

// player 2
document.body.addEventListener('keypress', function (event) { /* keydown/keypress */
    const key = event.key;

    switch(key) {
        case "a":
            p2_xDirecao = movimento.esquerda(p2_xDirecao);
            desenharCanvas("rgba(31, 109, 247, 1)",p2_xDirecao,p2_yDirecao);
            apagarCanvas(p2_xDirecao + tamanhoRaquete,p2_yDirecao);
            return p2_xDirecao;
        case "d":
            p2_xDirecao = movimento.direita(p2_xDirecao);
            desenharCanvas("rgba(31, 109, 247, 1)",p2_xDirecao,p2_yDirecao);
            apagarCanvas(p2_xDirecao - tamanhoRaquete,p2_yDirecao);
            return p2_xDirecao;
    }
})