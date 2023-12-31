import '../../style.css';
import BgImage from '../menu/nasgor.jpg';

export default function home() {
  const home = document.createElement('div');
  home.classList.add('wrapper');
  home.style.backgroundImage = `url(${BgImage})`;
  home.id = 'home';

  const text = document.createElement('p');
  text.innerText = 'Authentic Indonesian Cuisine';

  const menuBtn = document.createElement('button');
  menuBtn.innerText = 'View Menu';
  menuBtn.setAttribute('id', 'view-menu');

  home.appendChild(text);
  home.appendChild(menuBtn);

  return home;
}