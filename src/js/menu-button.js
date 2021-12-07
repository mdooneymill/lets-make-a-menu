export class MenuButton
{

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

        
        // event listener
        this.handleClick = this.handleClick.bind( this );
        this.domElement.firstChild.addEventListener( 'click', this.handleClick );

    }

    // Our click event handler
    handleClick( event )
    {

        this.clickCallback( this.index );

    }

    // Set the button state
    setSelected( selected )
    {

        // update selection
        this.selected = selected;
        
        // And update the CSS class accordingly
        if( this.selected ) 
        {
            
            this.domElement.className = 'nav selected';

        }
        else
        {
            
            this.domElement.className = 'nav';

        }

    }

}
