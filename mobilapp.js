function solucao(tempo, distancia) {
    let valor = 0;
    if (tempo <= 5) {
        console.log(600);
    } else {
        if (tempo > 5 && tempo < 60) {
            valor = tempo * 100 + (distancia * 50);
            console.log(valor);
        } else {
            if (distancia < 100) {
                valor = distancia * 200;
                console.log(valor);
            } else {
                valor = distancia * 150;
                console.log(valor);
            }
        }
    }

}

solucao(50, 120)