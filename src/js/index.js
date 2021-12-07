/*
This is the entry point for our javascript code. Don't worry about the
webpack setup for the moment.
*/
// This tells webpack to import the CSS, it gets added to index.html
import '/src/css/style.css';

// Import the App class
import { App } from './app';

// Create the App
let app = new App();