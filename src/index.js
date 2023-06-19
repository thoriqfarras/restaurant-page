import './style.css';
import Logo from './logo.png';
import Home from './pages/home/home.js';
import Menu from './pages/menu/menu.js';
import Contacts from './pages/contacts/contacts.js';
import GithubLogo from './github.svg';

function App() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');
  
  const header = Header();
  const navbar = Navbar();
  const main = document.createElement('main');
  const footer = Footer();
  
  const home = Home();
  const menu = Menu();
  const contacts = Contacts();
  
  // set home as initial active page
  let activePage = home;

  content.appendChild(header);
  content.appendChild(navbar);
  content.appendChild(main);
  main.appendChild(activePage);
  content.appendChild(footer);
  
  // page switching
  const navbarBtns = navbar.querySelectorAll('a');
  navbarBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (btn.innerText === 'Home' && activePage != home) {
        activePage = switchPage(home);
      } else if (btn.innerText === 'Menu' && activePage != menu) {
        activePage = switchPage(menu);
      } else if (btn.innerText === 'Contact' && activePage != contacts) {
        activePage = switchPage(contacts);
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
    const btn = document.createElement('a');
    li.appendChild(btn);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
  
  const btns = nav.querySelectorAll('a');
  btns.forEach((btn, index) => {
    switch (index) {
      case 0:
      btn.innerText = 'Home';
      btn.id = 'nav-home';
      btn.href = '#home';
      break;
      case 1:
      btn.innerText = 'Menu';
      btn.id = 'nav-menu';
      btn.href = '#menu';
      break;
      case 2:
      btn.innerText = 'Contact';
      btn.id = 'nav-contact';
      btn.href = '#contact';
      break;
      default:
      break;
    }
  });
  
  return nav;
}

function Footer() {
  const footer = document.createElement('footer');
  
  const text = document.createElement('p');
  text.innerText = `Created by Thoriq Farras 2023`;
  
  const github = document.createElement('img');
  github.src = GithubLogo;

  const githubWrapper = document.createElement('a');
  githubWrapper.href = 'https://github.com/thoriqfarras';
  githubWrapper.target = '_blank';

  githubWrapper.appendChild(github);
  footer.appendChild(text);
  footer.appendChild(githubWrapper);

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
