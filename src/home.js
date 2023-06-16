import './style.css';

export default function home() {
  const home = document.createElement('div');
  home.classList.add('wrapper', 'home');

  const text = document.createElement('p');
  text.innerText = 'Authentic Indonesian Cuisine';

  const menuBtn = document.createElement('button');
  menuBtn.innerText = 'View Menu';

  home.appendChild(text);
  home.appendChild(menuBtn);

  return home;
}