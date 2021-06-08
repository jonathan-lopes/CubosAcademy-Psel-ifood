function solucao(obj) {
    if (obj.temIngresso === true && (obj.idade >= obj.censura || obj.estaComPais === true) && (obj.temCarteirinha === false && obj.idade > 18))
        console.log("INTEIRA");
    else if (obj.temIngresso === true && (obj.idade >= obj.censura || obj.estaComPais === true) && (obj.temCarteirinha === true || obj.idade < 18))
        console.log("MEIA");
    else
        console.log("ACESSO NEGADO");
}

const obj = {
    "temIngresso": false,
    "idade": 23,
    "temCarteirinha": false,
    "censura": 16,
    "estaComPais": true
}
solucao(obj)