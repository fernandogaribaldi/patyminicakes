const imagens = [
  "bolo1.jpeg",
  "bolo2.jpeg",
  "bolo3.jpeg",
  "bolo4.jpeg",
  "bolo5.jpeg",
  "bolo6.jpeg",
  "bolo7.jpeg"
  // Adicione mais nomes de imagens aqui
];

const container = document.getElementById('cardapio');

imagens.forEach(nomeArquivo => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="imagens/${nomeArquivo}" alt="Produto Paty Mini Cakes" />
  `;
  container.appendChild(card);
});

