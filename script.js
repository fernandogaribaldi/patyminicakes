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

imagens.forEach(nome => {
  const img = document.createElement('img');
  img.src = nome;
  img.alt = "Produto Paty Mini Cakes";
  img.className = "imagem-card";

  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(img);
  container.appendChild(card);

  // Adiciona funcionalidade de clique
  img.addEventListener('click', () => {
    mostrarImagemModal(nome);
  });
});

function mostrarImagemModal(imagemSrc) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  modal.style.display = "flex";
  modalImg.src = imagemSrc;
}

function fecharModal() {
  document.getElementById('modal').style.display = "none";
}
