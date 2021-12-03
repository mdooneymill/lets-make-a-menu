// Import our MenuButton class
import { MenuButton } from './menu-button';

// Export our Menu class
export class Menu 
{

    constructor()
    {

        this.domElement = document.createElement( 'div' );
        this.domElement.className = 'nav';

        let ul = document.createElement( 'ul' );
        ul.className = 'nav';

        this.domElement.appendChild( ul );

        this.buttons = [];
        for( let i = 0; i < 6; i++ )
        {

            this.buttons[ i ] = new MenuButton( 
                'Option ' + i, // the button label
                i, // the button index
                this.handleButtonClick.bind( this ) // the function we want it to call when clicked
            );

            ul.appendChild( this.buttons[ i ].domElement );

        }

        // store the current selected button.
        // set to -1 at the start so nothing is selected
        this.currentSelection = -1;

    }

    // Our clickCallback function, called by MenuButton.handleClick
    handleButtonClick( buttonIndex )
    {

        // When this is called, a button has been clicked
        // we get the button array location via buttonIndex

        // If we have a currently selected button
        // set it's selected value to false
        if( this.currentSelection != -1 )
        {
            this.buttons[ this.currentSelection ].setSelected( false );
        }

        // Store the new button selection
        this.currentSelection = buttonIndex;

        // And set the button state to selected
        this.buttons[ this.currentSelection ].setSelected( true );

    }

}