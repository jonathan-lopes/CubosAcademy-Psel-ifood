function solucao(largura, altura) {
    if (largura > altura)
        console.log("PAISAGEM");
    else {
        if (largura === altura)
            console.log("QUADRADO");
        else {
            if (altura > largura)
                console.log("RETRATO");
        }
    }
}

solucao(5, 10);