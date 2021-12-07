export class Page
{

    constructor( title, content )
    {

        this.title = title;;
        this.content = content;

        this.domElement = document.createElement( 'div' );
        this.domElement.className = 'page';

        let titleText = document.createElement( 'h2' );
        titleText.className = 'page-title';
        titleText.innerHTML = title;

        let bodyText = document.createElement( 'div' );
        bodyText.className = 'page-content';
        bodyText.innerHTML = content;

        this.domElement.appendChild( titleText );
        this.domElement.appendChild( bodyText );

    }
    
}