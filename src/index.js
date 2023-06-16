import './style.css';
import Home from './home.js';
import Logo from './logo.png';

function App() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  content.appendChild(Header());
  content.appendChild(Navbar());
  content.appendChild(Main());
  content.appendChild(Footer());

  return content;
}

document.body.appendChild(App())

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

function Main() {
  const main = document.createElement('main');
  
  main.appendChild(Home());
  
  return main;
}

function Footer() {
  const footer = document.createElement('footer');
  footer.innerText = `Created by Thoriq Farras \u00A9 2023`;
  return footer;
}