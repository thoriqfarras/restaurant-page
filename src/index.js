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
  
  // set home as initial active page
  let activePage = Home();
  
  content.appendChild(header);
  content.appendChild(navbar);
  content.appendChild(main);
  main.appendChild(activePage);
  content.appendChild(footer);
  
  const navbarBtns = navbar.querySelectorAll('button');
  navbarBtns.forEach(btn => {
    pageChangeHandler(btn, main, activePage);
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

function pageChangeHandler(btn, main, activePage) {
  btn.addEventListener('click', () => {
    const wrapper = main.querySelector('.wrapper');
    if (btn.innerText === 'Home' && activePage != Home()) {
      wrapper.remove();
      main.appendChild(Home());
    } else if (btn.innerText === 'Menu' && activePage != Menu()) {
      wrapper.remove();
      main.appendChild(Menu());
    }
  });
}

document.body.appendChild(App());
