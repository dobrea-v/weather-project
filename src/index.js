import sum from './js/sum';
import './styles/style.scss';
import Cities from './js/cities';

console.log(Cities);

const locationSelect = document.getElementById('location-select');

locationSelect.addEventListener('change', (event) => {
  const city = event.target.value;
  const defaultCity = 'img/skyline.jpg';
  const cityImage = document.getElementById('location-image');

  if (!Cities[city]) {
    cityImage.src = defaultCity;
    return;
  }

  cityImage.src = Cities[city].url;
});


console.log(sum(1, 2));
console.log('Proof that it works');
