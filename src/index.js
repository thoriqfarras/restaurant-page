import './style.css';
import Logo from './assets/logo.png';
import Home from './pages/home.js';
import Menu from './pages/menu.js';

function App() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  
  const header = Header();
  const navbar = Navbar();
  const main = document.createElement('main');
  const footer = Footer();

  const home = Home();
  const menu = Menu();
  
  // set home as initial active page
  let activePage = Home();
  
  content.appendChild(header);
  content.appendChild(navbar);
  content.appendChild(main);
  main.appendChild(activePage);
  content.appendChild(footer);
  
  // page switching
  const navbarBtns = navbar.querySelectorAll('button');
  navbarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.innerText === 'Home' && activePage != home) {
        activePage = switchPage(home);
      } else if (btn.innerText === 'Menu' && activePage != menu) {
        activePage = switchPage(menu);
      }
    });
  });

  main.addEventListener('click', e => {
    if (e.target === main.querySelector('#view-menu')) {
      activePage = switchPage(menu)
    }
  });
  
  return content;
}

function Header() {
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

function Navbar() {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.appendChild(btn);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  
  const btns = nav.querySelectorAll('button');
  btns.forEach((btn, index) => {
    switch (index) {
      case 0:
      btn.innerText = 'Home';
      break;
      case 1:
      btn.innerText = 'Menu';
      break;
      case 2:
      btn.innerText = 'Contact';
      break;
      default:
      break;
    }
  });
  
  return nav;
}

function Footer() {
  const footer = document.createElement('footer');
  footer.innerText = `Created by Thoriq Farras \u00A9 2023`;
  return footer;
}

function switchPage(target) {
  const main = document.querySelector('main');
  const wrapper = main.querySelector('.wrapper');
  wrapper.remove();
  main.appendChild(target);
  return target;
}

document.body.appendChild(App());
