// Import our MenuButton class
import { MenuButton } from './menu-button';
// Import our data json
import Data from '/assets/json/data.json';

// Export our Menu class
export class Menu 
{

    constructor()
    {
        
        // First create the containing div, storing it as a class variable ( this. )
        this.domElement = document.createElement( 'div' );
        // assign the css class
        this.domElement.className = 'nav';

        // Then create the ul
        let ul = document.createElement( 'ul' );
        // assign the css class
        ul.className = 'nav';

        // add it to the div 
        this.domElement.appendChild( ul );

        // now create the buttons
        // we'll store them in an Array
        this.buttons = [];
        for( let i = 0; i < 6; i++ )
        {

            let buttonData = Data.menu_data[ i ];
            // create a new MenuButton and add to the Array
            this.buttons[ i ] = new MenuButton( buttonData.label, buttonData.link );
            
            // and add it to the ul
            ul.appendChild( this.buttons[ i ].domElement );

        }

    }

}