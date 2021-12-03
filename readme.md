#### Lesson 04
## Adding Functionality With Events and Callbacks

Now we have a menu created with javascript we can start to add extra features to our menu which aren't so simple to do with HTML and CSS.  

Let's start by making sure our currently selected item stays in it's hover state when it has been selected.  

We need to add some extra logic to both then Menu and MenuButton classes to achieve this.  

- The Menu will create each MenuButton
- When a MenuButton is clicked, it should tell the Menu
- When the Menu is told a MenuButton is clicked it should deselect the current button, if any, and select the clicked button.

### Updating The MenuButton Class

Let's start by adding the extra pieces we need to MenuButton. We want each button to know what text it should display, an ID or Index for the button so the Menu knows which was clicked and we will also add a Callback Function for the MenuButton to call once it has been clicked. We also need to track whether our button is selected or not. Our new constructor looks like this:
```javascript
constructor( label, index, clickCallback )
{

    this.label = label; // Store the Button Copy
    this.index = index; // Store the Button Index / ID
    this.clickCallback = clickCallback; // Store the Callback Function
    this.selected = false; // Store Selected state and set to false
    
    ...
```

We also need to add a couple of functions to help control the button state. 

First we can add a function to update the selected boolean and also update the domElement class.  

```javascript
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
```

And we also add a function that is called when a user clicks on the MenuButton, our Event Handler. Note, Event Handlers receive Event Objects with more detailed information. We access these, if needed, via the function property.  
More info: [Click Event on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

```javascript
// Our click event handler
handleClick( event )
{

    // here we call the clickCallback function
    // and pass it the button index.
    this.clickCallback( this.index );

}
```

### Adding The Event Listener

In the last lesson we created our MenuButton but we didn't keep a reference to the `<a>` element which we want to attach the Event Listener to. (We _could_ add the Event Listener to the `<li>` element but it's good practice to use anchors).  

So how do we get access to the anchor tag? We know that it is the only child of our `this.domElement` object so we can access it using `this.domElement.firstChild`. We add the event listener here for a `click` event.  
More Info: [Node on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)
```javascript
this.domElement.firstChild.addEventListener( 'click', this.handleClick );
```

Now when we click on any of the buttons they will call the `handleClick` function in the MenuButton class. 

Because we are handling the click event in javascript, we can remove the `href` value from the anchor tag. 
```js
<a class="nav">
```

#### A quick note on Scope and .bind()

The Click event is Scoped to the Anchor element, that means that when the handleClick Event Handler is called it can't see the MenuButton class variables or methods, it is being called on the Anchor tag itself. In some cases this might be the desired functionality, but in this case we want handleClick to be Scoped to our MenuButton class so we can access the properties.  
We do that by 'binding' our callback function to our class. We are setting `this.handleClick` to be bound to `this` which is our MenuButton class.
```javascript
this.handleClick = this.handleClick.bind( this );
```
Now when handleClick is called it can see the MenuButton variables.

### Updating The Menu Class

We now need to update the Menu class so that our MenuButtons are passed all the information they needed when we create them and also add a function to be called when the MenuButton is clicked.  

First we create a variable to store the currently selected button index. We want the menu to start with nothing selected so we set the value to -1.
```javascript
this.currentSelection = -1;
```

Next we need to create a function that we will pass to the MenuButtons so they can call it when clicked.

```javascript
handleButtonClick( buttonIndex )
{

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
```

Finally we can add the new properties to our MenuButtons when we create them. Notice how we `bind` the Menu callback function to `this` so that when the function is called it has acces to the Menu class.

```javascript
this.buttons[ i ] = new MenuButton( 
                        'Option ' + i, // the button label
                        i, // the button index
                        this.handleButtonClick.bind( this ) // the function we want it to call when clicked
                    );
```

### Updated CSS

Our updates are nearly finished but we need to update our CSS to show our selected button state.
Previously we set a button hover state using CSS selectors, specifically the `:hover` selector for when our mouse cursor is over the button. We also want to use this style to show the currently selected menu button so we add that element and class combination to our CSS.

```css
/* We now want the button hover state to stay active if it has our selected class added */
li.nav:hover div.nav-fill, 
li.selected div.nav-fill {
    width: 7px;
    transition: width 0.165s cubic-bezier(0.5, 1, 0.89, 1);
}
```

You can see that we are using the same styling as before on both the `nav-fill` and `nav-copy` elements, but by adding `li.selected div.nav-fill` after our original class we can also show this state when the `nav-fill` div is inside an `<li>` tag with the  `selected` class. 

We no longer see the correct cursor when our mouse is over the button because the browser can't see a link on the tag. So we add `cursor: pointer` to the `li.nav` style.
```css
li.nav {
    display: block;
    list-style-type: none;
    background-color: lightgrey;
    margin: 3px;
    cursor: pointer;
}
```

### All Done
Now we can select a menu item and it will stay in the hover state until another menu item is selected, letting the user know which section they are currently in.