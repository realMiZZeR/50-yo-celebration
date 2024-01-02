const firstSection = document.getElementById('first');
const secondSection = document.getElementById('second');

window.addEventListener('load', () => {
  firstSection.style.opacity = 1;
})

const firstButton = document.querySelector('.first__button');

const secondButton = document.querySelector('.second__button');

firstButton.addEventListener('click', () => {
  firstSection.style.opacity = 0;

  setTimeout(() => {
    firstSection.style.display = 'none';
    secondSection.style.display = 'flex';
  }, 1000);

  setTimeout(() => {
    secondSection.style.opacity = 1;
  }, 1100);
})

secondButton.addEventListener('click', () => {
  const link = 'https://lesta.ru/shop/gifts/';

  window.open(link, '_blank');
});