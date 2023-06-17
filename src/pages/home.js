import '../style.css';
import BgImage from '../assets/nasgor.jpg';

export default function home() {
  const home = document.createElement('div');
  home.classList.add('wrapper', 'home');
  home.style.backgroundImage = `url(${BgImage})`;

  const text = document.createElement('p');
  text.innerText = 'Authentic Indonesian Cuisine';

  const menuBtn = document.createElement('button');
  menuBtn.innerText = 'View Menu';

  home.appendChild(text);
  home.appendChild(menuBtn);

  return home;
}