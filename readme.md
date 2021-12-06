#### Lesson 03
## Creating Elements With Javascript

Adding HTML elements to a page manually works fine for relatively static websites but it's not very flexible, updating can be tedious and typing can be prone to human error.  

We can use javacript to create the elements for us which gives us lots of ways to control how those elements look and behave.  

### Creating the Menu

We have already decided what our menu should look like and created the relevant CSS to style our elements. Now we just need to create the elements and assign the CSS class.  

```javascript
// Create a DIV element
let div = document.createElement( 'div' );
// assign the css class
div.className = 'nav';
```

We now have a `<div>` element stored in our `div` variable but it's not yet visible because we haven't added it to the page. We can add our element to the `<body>` tag using the following code...

```javascript
// add the div to the <body> tag
document.body.appendChild( div );
```

Have a look at `menu.js` to see this code in action. You'll notice that when we create the `<ul>` element we add it to the new div we created and not the body.

```javascript
// add the ul element to our navigation div 
this.domElement.appendChild( ul );
```

You can think of each tag or element on an HTML page as a bunch of nested objects. We can use this to build a hierarchy of elements on a page the same way we would by writing the HTML directly.  

### Creating the Buttons

The buttons are created in a similar way to the menu. The MenuButton class expects a string to be passed to the constructor which we use as the button content.  
However; we create the button HTML in a slightly different way to above. Our DOM element, `<li>` this time, is created as before but we use an HTML string to create the button content. (Have a look at `menu-button.js` to see the equivalent with javascript)

```javascript
this.domElement.innerHTML = `<a class="nav" href="#01">
                                <div class="nav-item">
                                    <div class="nav-fill"></div>
                                    <div class="nav-copy">` + label + `</div>
                                </div>
                             </a>`;
```
Note how we add the button content, `label` to the `nav-copy` div by escaping the string and adding a reference to a value.  

Sometimes this can be a quicker way to create a complex group of elements although it also means you don't have direct access to the elements unless you start diving through lists of child elements which can get very messy.  

As a very loose rule, if you need access to an element in your code you should probably create it as an object with javscript.  

### Using JSON Data 

Now that our menu is creating the buttons for us we can look at using data from external sources to populate the content as well. This is where you gain lots of flexibility over static HTML as you can serve different content to users based on any sort of variable. For example, you may want to translate text for multiple countries and so you could load different data files based on browser locale.  

There is a json file added to our assets folder with the menu content defined inside. `menu_data` contains an array of objects to define our buttons, each containing a label and link.

```json
{
    "menu_data" : [
        {
            "label": "The Mill",
            "link" : "https://www.themill.com"
        },
        ...
```

In our Webpack project we can simply import json files to our javascript and get access to the data as objects.  
```javascript
import Data from '/assets/json/data.json';
console.log( Data.menu_data[0].label);
// The Mill
```

We _could_ import the data into our Menu class but that would cost us some flexibilty, really the Menu class doesn't need to know where the data is, it should just get a list of button objects to create. In this example the data is imported to index.js and we pass the `menu_data` json object to the menu constructor.

```javascript
(index.js)
...
let menu = new Menu( Data.menu_data );
...
(menu.js)
export class Menu 
{

    constructor( menuData )
    {
        
        // Store the menu Data
        this.menuData = menuData;

        ...
```

Now we can loop through the `menuData` array to create the buttons we need. Note how we use the length of the array to determine our loop length, meaning the menu can contain any number of buttons.


```javascript
for( let i = 0; i < menuData.length; i++ )
{

    let buttonData = menuData[ i ];
    // create a new MenuButton and add to the Array
    this.buttons[ i ] = new MenuButton( buttonData.label, buttonData.link );

    ...
```

We also need to update the MenuButton class to handle the new link data and add it to the anchor tag.

```javascript
constructor( label, link )
{

    // store the label and link values
    this.label = label;
    this.link = link;
    
    ...

    this.domElement.innerHTML = `<a class="nav" href="` + link + `" target="_blank">
                                    <div class="nav-item">
                                        <div class="nav-fill"></div>
                                        <div class="nav-copy">` + label + `</div>
                                    </div>
                                </a>`;

    ...    

```

And now we have a dynamic menu which can be re-used across multiple locations with content based on data we pass it.

### Further Reading

[Document.createElement on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)  
[Node.appendChild on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)  
[JSON on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)  