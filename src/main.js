import './style.css';
import BgImage from './background.jpg';
import Home from './home.js'

export default function main() {
  const main = document.createElement('main');
  
  main.appendChild(new Home());
  
  return main;
}