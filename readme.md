#### Lesson 02
## CSS Transitions

Our menu looks and works ok but let's add some animation to our hover state using CSS Transitions.

You can find lots of information about using transitions on [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

Transitions are defined in CSS using the following syntax.
```css
div {
    transition: <property> <duration> <timing-function> <delay>;
}
```

__Property__ is the CSS property we want to animate
__Duration__ is the amount of time the animation takes
__Timing-function__ can be defined by a cubic bezier or default easing functions
__Delay__ is an optional delay for the start of the animation


Here are 6 example transitions using our menu.

### Fade Background Colour

The `<li>` tag and it's content remain the same in this example. By adding one line to our existing CSS we can fade the background colour over time.

```css
li.nav {
    display: block;
    list-style-type: none;
    background-color:lightgrey;
    margin: 3px;
    transition: background-color 0.25s ease-out;
}

li.nav:hover {
    background-color: rgb(71, 71, 71);
}
```

The transition we added says that the `background-color` property should transition over `0.25` seconds with an `ease-out` motion. Now when we change the colour on the hover state the css knows what colour to transition to.

### Text Shadow

The text shadow effect needs to target the copy in our button rather than the whole box. With CSS we can set styles on classes that live within other classes. In this example we only want to style our nav-item `<div>` which lives inside the example-02 `<li>`.  
You can target that combination by adding the parent first, then leaving a space and adding the child class.

```css
li.example-02 div.nav-item{
    text-shadow: none;
    transition: text-shadow 0.25s ease-out;
}
li.example-02:hover div.nav-item {
    text-shadow: 3px 3px 5px black;
}
```

n.b. The css classes here are different for each button which isn't something you would normally do with a menu. The example css references `li.example-02` but you could use `li.nav` to apply it to all the nav buttons.

### A quick note on `position`

For the rest of the examples we are using a slightly modified button layout.

```html
<li class="nav example-03">
    <a class="nav" href="#03">
        <div class="nav-item">
            <div class="nav-fill"></div>
            <div class="nav-copy">Scale Background Width</div>
        </div>
    </a>
</li>
```
Instead of just putting text inside the nav-item `<div>` we add a div to be our background, nav-fill, and another to contain the copy, nav-copy.  
We need to alter the CSS a little bit to handle this properly. The nav-fill div should sit behind the copy so we use a z-depth property to control their display order. There is a caveat here, the z-index CSS property will only set the display order for positioned elements.  

```css
div.nav-item {
    padding: 10px;
    position: relative;
}

div.nav-copy {
    position: relative;
    z-index: 1;
}
```
Here we use a `position: relative;` on both the containing element, nav-item, and the copy element, nav-copy.  
Now to make our background sit in the right position we can use `position: absolute;` to let us align it in the relatively positioned div.  
By setting both the `top` and `left` values to 0 we can sit the background flush in it's container.  
Also note how the `z-index` value for `nav-fill` is set to a lower value than `nav-copy` so that it displays behind the text.
```css
div.nav-fill {
    background-color: rgba(71, 71, 71, 1);
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
}
```

Read more: [position CSS property on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

### Scale Background Width

Now we can animate the background of the link to give us some fancier effects and we haven't even touched any javascript.  

In this example the width is scaled from 0 to 100%.

```css
li.example-03 div.nav-fill {
    height: 100%;
    width: 0;
    transition: width 0.165s ease-out;
}
li.example-03:hover div.nav-fill {
    width: 100%;
}
```

### Scale Background Height

Almost the same as above but we transition the height property instead.

```css
li.example-04 div.nav-fill {
    height: 0;
    width: 100%;
    transition: height 0.125s ease-out;
}
li.example-04:hover div.nav-fill {
    height: 100%;
}
```

### Masked Background

Up til now our background div was the same size and shape as our button and we altered it's size. If we set the size to a value larger than 100% or less than 0 our background would be visble outside of the button.

By setting the conataining `<li>` element's `overflow` property to `hidden` it means anything that isn't inside the div isn't visible, like a mask.

```css
li.example-05 {
    overflow: hidden;
}
```
Now we can move the background element around and we only see it 'through' the button. In this example I have made it a large circle that moves up into view when we rollover the button. 

```css
li.example-05 div.nav-fill {
    width: 700px;
    height: 700px;
    border-radius: 50%;
    top: 130%;
    left: -50%;
    transition: top 0.25s ease-out;
}
li.example-05:hover div.nav-fill {
    top: -130%;
}
```

### Multiple Properties and Delays

You can use multiple css transitions on your elements at once and when combined with delays create complex looking transitions.  

Here's a simple example where the background width is scaled over 0.25 seconds and the text shadow is brought in afterwards by adding a delay value to our transition.  

```css
li.example-06 div.nav-fill {
    height: 100%;
    width: 0;
    transition: width 0.25s ease-out;
}
li.example-06:hover div.nav-fill {
    width: 100%;
}
li.example-06 div.nav-item{
    text-shadow: none;
    transition: text-shadow 0.25s ease-out;
}
li.example-06:hover div.nav-item {
    text-shadow: 3px 3px 2px orange;
    transition: text-shadow 0.25s ease-out 0.25s;
}
```

