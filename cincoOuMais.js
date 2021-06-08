Array.min = function(array) {
    return Math.min.apply(Math, array);
};

function solucao(precos) {
    let valor = 0;
    let menor = null;

    for (let i = 0; i < precos.length; i++) {
        valor += precos[i];
    }

    if (precos.length < 5) {
        console.log(valor);
    } else if (precos.length >= 5) {
        console.log(valor - Array.min(precos))
    }
}

precos = [500, 100, 500, 50, 350, 25];

solucao(precos);