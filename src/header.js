import './style.css';
import Logo from './logo.png';

export default function header() {
  const header = document.createElement('header');
  
  const logo = new Image();
  logo.src = Logo;
  logo.classList.add('logo');
  logo.alt = 'Racetha Restaurant\'s logo';

  const title = document.createElement('h1');
  const subTitle = document.createElement('h3');
  title.innerText = 'Racetha';
  subTitle.innerText = 'Restaurant';

  header.appendChild(logo);
  header.appendChild(title);
  header.appendChild(subTitle);

  return header;
}