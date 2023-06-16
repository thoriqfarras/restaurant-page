import './style.css';

export default function footer() {
  const footer = document.createElement('footer');
  footer.innerText = `Created by Thoriq Farras \u00A9 2023`;
  return footer;
}