import './styles/main.css';
import _ from 'lodash';
import sampleImage from './assets/images/image.png'; // Імпорт зображення

console.log('Hello, Webpack!');
console.log(_.join(['This', 'is', 'Lodash'], ' '));

// Динамічно додаємо зображення в DOM
const img = document.createElement('img');
img.src = sampleImage;
img.alt = 'Sample Image';
document.body.appendChild(img);