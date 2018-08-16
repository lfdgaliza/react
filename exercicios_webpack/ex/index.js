const produto = {
    nome: "caneta",
    preco: 2,
    desconto: 0.05
}

function clone(obj) {
    return { ...obj };
}

const novoProduto = clone(produto);
novoProduto.nome = "df";

console.log(produto, novoProduto);