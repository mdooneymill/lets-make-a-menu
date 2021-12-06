// Export our class
export class MenuButton
{


    // We've added a few new variables to the button constructor
    // index is an int id for the button
    // clickCallback is a function the MenuButton will call when clicked
    constructor( label, index, clickCallback )
    {

        this.label = label;
        this.index = index;
        this.clickCallback = clickCallback;
        this.selected = false;

        this.domElement = document.createElement( 'li' );
        this.domElement.className = 'nav';

        // Note: href and target values are removed from href
        this.domElement.innerHTML = `<a class="nav">
                                        <div class="nav-item">
                                            <div class="nav-fill"></div>
                                            <div class="nav-copy">` + label + `</div>
                                        </div>
                                    </a>`;

        // we want to attach an event listener to the anchor tag so we can handle when it has been clicked
        // you can access child elements a few ways
        // domElement.firstChild or domElement.lastChild returns the first or last child elements
        // domElement.children contains an array of all child elements
        // to make sure the event is in the scope of this class, we need to 'bind' it to 'this'
        // thie means that the handleClick function can see the class vars for this MenuButton object
        this.handleClick = this.handleClick.bind( this );
        this.domElement.firstChild.addEventListener( 'click', this.handleClick );

    }

    // Our click event handler
    handleClick( event )
    {

        // here we call the clickCallback function
        // in this case it is a function that lives in the Menu class
        // we pass it the button index so the menu knows which button was clicked
        this.clickCallback( this.index );

    }

    // Set the button state
    setSelected( selected )
    {

        // We store the updated selection state
        this.selected = selected;
        
        // And update the CSS class accordingly
        if( this.selected ) 
        {
            // When the button is selected we give it an extra CSS class, 'selected'
            this.domElement.className = 'nav selected';
        }
        else
        {
            // Otherwise it should behave as normal
            this.domElement.className = 'nav';
        }

    }

}
