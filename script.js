const produtos = [
  {
    nome: "Bolo de Chocolate",
    descricao: "Fofinho, recheado com brigadeiro.",
    preco: "R$ 40,00",
    imagem: "imagens/bolo1.jpg"
  },
  {
    nome: "Doce de Leite Ninho",
    descricao: "Delicioso brigadeiro de leite ninho.",
    preco: "R$ 2,50 (unid.)",
    imagem: "imagens/doce1.jpg"
  },
  {
    nome: "Bolo de Cenoura",
    descricao: "Cobertura generosa de chocolate.",
    preco: "R$ 35,00",
    imagem: "imagens/bolo2.jpg"
  }
  // Adicione mais produtos aqui
];

const container = document.getElementById('cardapio');

produtos.forEach(produto => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" />
    <h3>${produto.nome}</h3>
    <p>${produto.descricao}</p>
    <p><strong>${produto.preco}</strong></p>
  `;
  container.appendChild(card);
});
