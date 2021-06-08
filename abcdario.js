function solucao(letra, palavras) {
    let cont = 0;
    for (let i = 0; i < palavras.length; i++) {
        if (letra !== palavras[i].substr(0, 1))
            cont++;
    }
    console.log(cont);
}

[{
    "letra": "m",
    "palavras": [
        "mamao",
        "maca",
        "melao",
        "melancia",
        "laranja"
    ]
}]