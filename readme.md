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
However I create the button HTML in a slightly different way to above. Our DOM element, `<li>` this time, is created as before but we use an HTML string to create the button content. (Have a look at `menu-button.js` to see the equivalent with javascript)

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

### Further Reading

[Document.createElement on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
[Node.appendChild on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)