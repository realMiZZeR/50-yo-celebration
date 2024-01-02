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

// firstSection.addEventListener('transitionend', () => {
//   firstSection.style.display = 'none';

//   secondSection.style.opacity = 1;
//   secondSection.style.display = 'flex';
// })

secondButton.addEventListener('click', () => {
  const link = 'https://lesta.ru/id/signin/?next=%2Fid%2Fopenid%2F4532024074551756029%2F&trust_root=https%3A%2F%2Ftanki.su%2F';

  window.open(link, '_blank');
});