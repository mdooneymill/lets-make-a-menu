// Export our class
export class MenuButton
{

    // The constructor takes a label value for the button text
    constructor( label )
    {

        // store the value
        this.label = label;

        // create an element like before
        this.domElement = document.createElement( 'li' );
        // assign the CSS class
        this.domElement.className = 'nav';

        // Sometimes it is quicker to create our elements with an HTML string
        // instead of creating each bit with code.
        // Notice how we add the button label to the same div as before
        // by esacping the string and inserting a reference to our label value
        this.domElement.innerHTML = `<a class="nav" href="#01">
                                        <div class="nav-item">
                                            <div class="nav-fill"></div>
                                            <div class="nav-copy">` + label + `</div>
                                        </div>
                                    </a>`;

            
        // The string method above is equivalent to the following code
        // Each method has pros and cons. There is more code involved below but
        // we can also have direct access to each element very easily.

        /*

        let anchor = document.createElement( 'a' );
        anchor.className = 'nav';
        anchor.href = '#01';

        let item = document.createElement( 'div' );
        item.className = 'nav-item';

        let fill = document.createElement( 'div' );
        fill.className = 'nav-fill';

        let copy = document.createElement( 'div' );
        copy.className = 'nav-copy';
        copy.innerHTML = label;

        this.domElement.appendChild( anchor );
        anchor.appendChild( item );
        item.appendChild( fill );
        item.appendChild( copy );

        */

    }

}