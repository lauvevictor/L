// Adiciona a quantidade de corações que você quiser no container
document.addEventListener('DOMContentLoaded', function () {
  const heartContainer = document.querySelector('.hearts-container');
  
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heartContainer.appendChild(heart);
  }
});
