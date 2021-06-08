function solucao(produtos) {
    let totalProdutos = 0;

    let obj = {
        totalTop: 0,
        percentual: null
    };

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].preco > 10000) {
            obj.totalTop += produtos[i].preco
        }
    }

    for (let i = 0; i < produtos.length; i++) {
        totalProdutos += produtos[i].preco;
    }

    obj.percentual = obj.totalTop / totalProdutos;
    console.log(obj);
}

const top = [{
        "nome": "Camiseta",
        "preco": 7000
    },
    {
        "nome": "Tenis",
        "preco": 8000
    },
    {
        "nome": "Relogio",
        "preco": 15000
    }
]

//console.log(top)

solucao(top)