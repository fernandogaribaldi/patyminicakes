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

let imagemAtual = 0;

const container = document.getElementById('cardapio');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

// Render cards
imagens.forEach((nome, index) => {
  const img = document.createElement('img');
  img.src = nome;
  img.alt = "Produto Paty Mini Cakes";
  img.className = "imagem-card";

  const card = document.createElement('div');
  card.className = 'card';
  card.appendChild(img);
  container.appendChild(card);

  img.addEventListener('click', () => {
    imagemAtual = index;
    mostrarImagemModal();
  });
});

function mostrarImagemModal() {
  modal.style.display = "flex";
  modalImg.src = imagens[imagemAtual];
}

function fecharModal() {
  modal.style.display = "none";
}

// Suporte a arrastar (touch ou mouse)
let startY = 0;

modal.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
});

modal.addEventListener('touchend', (e) => {
  const endY = e.changedTouches[0].clientY;
  handleSwipe(startY, endY);
});

modal.addEventListener('mousedown', (e) => {
  startY = e.clientY;
});

modal.addEventListener('mouseup', (e) => {
  const endY = e.clientY;
  handleSwipe(startY, endY);
});

function handleSwipe(start, end) {
  const delta = start - end;

  if (Math.abs(delta) > 50) {
    if (delta > 0) {
      // Arrastou para cima
      imagemAtual = (imagemAtual + 1) % imagens.length;
    } else {
      // Arrastou para baixo
      imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    }
    mostrarImagemModal();
  }
}
