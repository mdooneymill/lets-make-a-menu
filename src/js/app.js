// Import the json data
import Data from '/assets/json/data.json';

// Import the Menu and Page classes
import { Menu } from './menu';
import { Page } from './page';

export class App
{

    constructor()
    {

        // create the menu
        this.menu = new Menu( 
            Data.page_data, // the menu will get link text from the page data
            this.handleMenuButtonClick.bind( this ) // the callback function
        );

        // create the page_data content
        this.pages = [];
        for( let i = 0; i < Data.page_data.length; i++ )
        {

            this.pages[i] = new Page(
                Data.page_data[i].title,
                Data.page_data[i].content
            );

        }

        // create the default_page content
        this.defaultPage = new Page(
            Data.default_page.title,
            Data.default_page.content
        );

        // we can use -1 to mean we are showing the default page
        this.currentPage = -1;

        // add the menu
        document.body.appendChild( this.menu.domElement );
        // add the default page
        document.body.appendChild( this.defaultPage.domElement );

    }

    // Callback function for the MenuButtons
    handleMenuButtonClick( buttonIndex )
    {

        // If this button is already selected, we can ignore the click
        if( this.menu.currentSelection == buttonIndex )
            return;

        // Otherwise tell the menu to update
        this.menu.setSelected( buttonIndex ); 

        // Show the corresponding page content
        this.updatePageContent( buttonIndex );

    }

    updatePageContent( pageIndex )
    {

        // remove the current page, otherwise remove the default page
        if( this.currentPage != -1 )
        {

            document.body.removeChild( this.pages[ this.currentPage ].domElement );

        }
        else
        {

            document.body.removeChild( this.defaultPage.domElement );

        }

        // update the current page
        this.currentPage = pageIndex;

        // add the new page to the document body
        document.body.appendChild( this.pages[ this.currentPage].domElement )

    }

}
