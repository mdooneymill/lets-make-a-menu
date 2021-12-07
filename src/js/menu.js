// Import our MenuButton class
import { MenuButton } from './menu-button';


// Export our Menu class
export class Menu 
{

    constructor( menuData, clickCallback )
    {
        
        // Store the menu Data and callback function
        this.menuData = menuData;
        this.clickCallback = clickCallback;

        // Create elements
        this.domElement = document.createElement( 'div' );
        this.domElement.className = 'nav';

        let ul = document.createElement( 'ul' );
        ul.className = 'nav';

        this.domElement.appendChild( ul );

        this.buttons = [];
        for( let i = 0; i < menuData.length; i++ )
        {

            let buttonData = menuData[ i ];

            this.buttons[ i ] = new MenuButton( 
                buttonData.link_label, // the button label
                i, // the button index
                this.clickCallback // the function we want it to call when clicked
            );

            ul.appendChild( this.buttons[ i ].domElement );

        }

        // create a button to open / close the menu
        this.toggleButton = document.createElement( 'div' );
        this.toggleButton.className = 'nav-toggle';
        this.domElement.appendChild( this.toggleButton );

        this.toggleMenuState = this.toggleMenuState.bind( this );
        this.toggleButton.onclick = this.toggleMenuState;

        // create some SVG icons to display on the button 
        this.openMenuIcon = document.createElement( 'svg' );
        this.openMenuIcon.innerHTML = `<svg viewBox="0 0 44 44" width="44" height="44">
                                            <rect x="4" y="10" width="36" height="3" fill="white"></rect>
                                            <rect x="4" y="20" width="36" height="3" fill="white"></rect>
                                            <rect x="4" y="30" width="36" height="3" fill="white"></rect>
                                        </svg>`;

        
        this.closeMenuIcon = document.createElement( 'svg' );
        this.closeMenuIcon.innerHTML = `<svg viewBox="-1 0 44 44" width="44" height="44">
                                            <rect x="12" y="0" width="36" height="3" transform="rotate(45)" fill="white"></rect>
                                            <rect x="-19" y="28" width="36" height="3" transform="rotate(-45)" fill="white"></rect>
                                        </svg>`;

        // add the SVG to the toggle buttons
        this.toggleButton.appendChild( this.openMenuIcon );

        // store the current selected button and menu open state
        this.currentSelection = -1;
        this.menuOpen = false;

    }

    // Our clickCallback function, called by MenuButton.handleClick
    setSelected( buttonIndex )
    {

        // deselect current button
        if( this.currentSelection != -1 )
        {
            
            this.buttons[ this.currentSelection ].setSelected( false );

        }

        // Store the new button selection
        this.currentSelection = buttonIndex;

        // And set the button state to selected
        this.buttons[ this.currentSelection ].setSelected( true );

        // close the menu to show the content
        this.toggleMenuState();

    }

    toggleMenuState( event )
    {

        // toggle menuOpen boolean
        this.menuOpen = !this.menuOpen;
        // update nav div class
        this.domElement.className = this.menuOpen ? 'nav open' : 'nav';
        
        // update toggleButton icon
        if( this.menuOpen )
        {

            this.toggleButton.removeChild( this.openMenuIcon );
            this.toggleButton.appendChild( this.closeMenuIcon );

        }
        else
        {

            this.toggleButton.removeChild( this.closeMenuIcon );
            this.toggleButton.appendChild( this.openMenuIcon );

        }

    }

}