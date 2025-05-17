window.addEventListener('DOMContentLoaded', () => {
  const stickerImages = [
    'images/sticker1.webp',
    'images/sticker2.png',
    'images/sticker3.avif'
  ];

  const createSticker = () => {
    const img = document.createElement('img');
    img.src = stickerImages[Math.floor(Math.random() * stickerImages.length)];
    img.classList.add('bg-sticker');
    img.style.top = `${Math.random() * 100}%`;
    img.style.left = `${Math.random() * 100}%`;
    img.style.animationDelay = `${Math.random() * 2}s`;
    document.body.appendChild(img);
    setTimeout(() => img.remove(), 3000);
  };

  setInterval(() => {
    for (let i = 0; i < 3; i++) createSticker();
  }, 800);
});
