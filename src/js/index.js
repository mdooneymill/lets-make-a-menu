import _ from 'lodash';
import '/src/css/style.css';

function component() {
  
  const element = document.createElement('div');

  element.innerHTML = "Let's make a menu!";
  element.className = 'hello-text';

  return element;

}

  
document.body.appendChild(component());