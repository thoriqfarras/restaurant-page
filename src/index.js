import './style.css';
import Header from './header.js';
import Navbar from './navbar.js';
import Main from './main.js';
import Footer from './footer.js';

function app() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  content.appendChild(new Header());
  content.appendChild(new Navbar());
  content.appendChild(new Main());
  content.appendChild(new Footer());

  return content;
}

document.body.appendChild(app())