/*
This is the entry point for our javascript code. Don't worry about the
webpack setup for the moment.
*/

// This tells webpack to import the CSS, it gets added to index.html
import '/src/css/style.css';
// Import our Menu class
import { Menu } from './menu';

// Create a new Menu object
let menu = new Menu();
// And add it's DOM Element to the Body of our page
document.body.appendChild( menu.domElement );