/*
This is the entry point for our javascript code. Don't worry about the
webpack setup for the moment.
*/
// Import our data json
import Data from '/assets/json/data.json';
// This tells webpack to import the CSS, it gets added to index.html
import '/src/css/style.css';
// Import our Menu class
import { Menu } from './menu';

// Callback function for the MenuButtons
function handleMenuButtonClick( buttonIndex )
{

    // If this button is already selected, we can ignore the click
    if( menu.currentSelection == buttonIndex )
        return;

    // Otherwise tell the menu to update
    menu.setSelected( buttonIndex ); 
}

// Create a new Menu object and pass it the menu_data json object and the callback function
let menu = new Menu( Data.menu_data, handleMenuButtonClick.bind( this ) );
// And add it's DOM Element to the Body of our page
document.body.appendChild( menu.domElement );