# Introduction To JavaScript

## 01 - Variables

Welcome back! In this lesson, we will learn about variables. Variables are fundamental in any programming language, including JavaScript. They are containers that hold data values, which can be numbers, text, or even more complex data.

Think of a variable as a box that you can store things in. You can put a value in the box, take it out, or change it whenever you need to. In JavaScript, we use the `let`, `const`, or `var` keywords to declare a variable.

For our draggable terrarium, we need to keep track of the position of our elements as they are being dragged. We will use variables to store these positions.

Open your `script.js` file. At the top of the file, we will declare four variables using the `let` keyword. These variables will store the initial and current positions of the mouse cursor. Add the following code to your `script.js` file:

```javascript
let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;
```

Here’s what each variable represents:

pos1 and pos2 will store the change in cursor position on the X and Y axis.
pos3 and pos4 will store the current cursor position on the X and Y axis.
By setting these variables to 0 initially, we ensure they have a defined value before we start using them to track positions.

Let’s save our script.js file. Your code should now look like this:

`let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;`

In this lesson, we introduced variables, which are essential for storing and manipulating data in JavaScript. We declared four variables that will help us track the position of our elements while they are being dragged.

Understanding variables is crucial because they allow us to store and work with data dynamically. In the next lesson, we’ll learn about functions and how they can perform tasks for us in JavaScript. See you then!

## 02 - Functions

In this lesson, we will learn about functions. Functions are blocks of code designed to perform a particular task. Functions are one of the most important concepts in programming. They allow us to group a set of instructions into a single unit that can be executed whenever we need it.

Think of a function as a blueprint for a home improvement project. The blueprint contains all the instructions and measurements you need to follow to complete the project. Instead of figuring out the steps and measurements every time you want to do a similar project, you just refer to the blueprint. Similarly, instead of writing the same code multiple times, you write a function and call it whenever you need to perform a similar task in your program.

Let’s create a function in our `script.js` file that will handle the dragging of our elements.

Open your `script.js` file. Below our variable declarations, we’ll add a new function called `dragElement`. This function will take an HTML element as an argument and make it draggable. Here’s how to declare the function:

```javascript
function dragElement(terrariumElement) {
  // Function body will be added in upcoming lessons.
}
```

The function keyword is used to declare a function in JavaScript. The name of our function is dragElement, and it takes one parameter called terrariumElement. This parameter represents the HTML element that we want to make draggable.

For now, we’ll leave the body of the function empty. We’ll add the code inside the function in the upcoming lessons.

Save your script.js file. Your code should now look like this:

let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

function dragElement(terrariumElement) {
// Function body will be added in upcoming lessons.
}

In this lesson, we introduced functions, which allow us to group a set of instructions into a single unit that can be executed whenever we need it. We created a function called dragElement that will eventually handle the dragging of our terrarium elements.

Understanding functions is crucial because they help us organize our code and make it more reusable. In the next lesson, we’ll learn about manipulating the DOM using JavaScript. See you soon!

## 03 - DOM

Welcome back! Today, we’re going to learn about manipulating the DOM using JavaScript. The DOM, or Document Object Model, represents the structure of our webpage as a tree of objects. JavaScript allows us to interact with the DOM, making our webpages dynamic and interactive.

In this lesson, we’ll use JavaScript to select our plant elements by their ID so we can make them draggable.

Open your `script.js` file. Below our `dragElement` function, we’ll use the `document.getElementById` method to select our plant elements. This method returns the HTML element with the specified ID.

Let’s start by selecting the element with the ID `plant1`:

```javascript
document.getElementById('plant1');e.
```

We’ll also select the element with the ID plant2:

document.getElementById('plant2');

Right now, we’re just selecting these elements. In the next lessons, we’ll add code to make these elements draggable.

Save your script.js file. Your code should now look like this:

```javascript
let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

function dragElement(terrariumElement) {
  // Function body will be added in upcoming lessons.
}

// Select plant elements
document.getElementById("plant1");
document.getElementById("plant2");
```

In this lesson, we learned about manipulating the DOM using JavaScript. We used the document.getElementById method to select our plant elements by their ID.

Understanding how to manipulate the DOM is essential for creating dynamic and interactive webpages. In the next lesson, we’ll learn about event handling and how to respond to user actions. Stay tuned!

## 04 - Event Handling

In this lesson, we will learn about event handling in JavaScript. Event handling allows us to listen for and respond to user actions like clicks, drags, and more. This is a key part of making our webpage interactive.

We will add event listeners to our plant elements to handle the drag event. We’ll update our `script.js` file to listen for when the user clicks on a plant element and starts dragging it.

Open your `script.js` file. Inside the `dragElement` function, we’ll add an event listener for the `pointerdown` event. This event is triggered when the user presses a pointer button, like a mouse click, on the element.

Let’s add the event listener inside the `dragElement` function:

```javascript
function dragElement(terrariumElement) {
  terrariumElement.onpointerdown = pointerDrag;
}
```

The onpointerdown property is set to our pointerDrag function, which we’ll define next. This function will handle the initial actions when the user starts dragging the element.

Next, let’s add the pointerDrag function inside the dragElement function:

```javascript
function pointerDrag(e) {
  e.preventDefault();
  console.log(e);
}
```

The pointerDrag function takes an event object e as its parameter. The e.preventDefault() method prevents any default actions that might occur when the event is triggered. The console.log(e) statement logs the event object to the console, which is useful for debugging.

Now, let’s update our code to add the event listeners to the plant elements. Below the document.getElementById statements, we’ll call the dragElement function for each plant element:

```javascript
document.getElementById("plant1").onpointerdown = function () {
  dragElement(document.getElementById("plant1"));
};
document.getElementById("plant2").onpointerdown = function () {
  dragElement(document.getElementById("plant2"));
};
```

Save your script.js file. Your code should now look like this:

```javascript
let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

function dragElement(terrariumElement) {
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    console.log(e);
  }
}

document.getElementById("plant1").onpointerdown = function () {
  dragElement(document.getElementById("plant1"));
};
document.getElementById("plant2").onpointerdown = function () {
  dragElement(document.getElementById("plant2"));
};
```

In this lesson, we learned about event handling and added event listeners to our plant elements. This allows us to respond to user actions like clicks and drags.

Understanding event handling is crucial for creating interactive webpages. In the next lesson, we’ll learn about closures and how they can help us manage state in our functions. See you soon!

## 05 - Closures

Welcome back! Today, we’re going to learn about closures in JavaScript. Closures are a powerful feature that allow an inner function to access variables from its outer function. This is especially useful for managing state and keeping track of data over time.

In our draggable terrarium, we need to track the position of the mouse and the element while it’s being dragged. We’ll use closures to do this.

Open your `script.js` file. Inside the `dragElement` function, we’ll add more code to the `pointerDrag` function to update the mouse position when the user starts dragging the element.

Here’s how we’ll do it:

```javascript
function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }
}
```

The pointerDrag function now updates pos3 and pos4 to the current position of the mouse cursor. It also sets up event listeners for the pointermove and pointerup events. These events will be handled by the elementDrag and stopElementDrag functions, which we’ll define next.

Next, let’s define the elementDrag function. This function will update the position of the element as the mouse moves:

```javascript
function elementDrag(e) {
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
  terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
}
```

The elementDrag function calculates the new position of the element based on the mouse’s movement and updates the element’s top and left styles accordingly.

Finally, let’s define the stopElementDrag function. This function will remove the event listeners when the mouse button is released:

```javascript
function stopElementDrag() {
  document.onpointerup = null;
  document.onpointermove = null;
}
```

The stopElementDrag function ensures that the element stops moving when the user releases the mouse button.

Save your script.js file. Your code should now look like this:

```javascript
Copy code
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + 'px';
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

document.getElementById('plant1').onpointerdown = function() {
    dragElement(document.getElementById('plant1'));
};
document.getElementById('plant2').onpointerdown = function() {
    dragElement(document.getElementById('plant2'));
};
```

In this lesson, we learned about closures and how they allow us to access variables from an outer function within an inner function. We used closures to track the mouse and element positions while dragging.

Understanding closures is essential for managing state and data in JavaScript. In the next lesson, we’ll review what we’ve learned and finalize the draggable elements functionality. Stay tuned!

## 06 - Putting It All Together

Welcome to the final lesson! Today, we will review what we’ve learned and finalize the draggable elements functionality. We’ve covered variables, functions, DOM manipulation, event handling, and closures. Now, let’s ensure that all our plant elements are draggable.

First, let’s make sure we call the `dragElement` function for each plant element. We will use a loop to go through all elements with the class `plant` and make them draggable.

Open your `script.js` file. Instead of calling `dragElement` individually for each plant, we’ll use `document.querySelectorAll` to select all elements with the class `plant`, and then use a loop to make each one draggable.

Here’s how we’ll do it:

```javascript
document.querySelectorAll(".plant").forEach((plant) => {
  plant.onpointerdown = function () {
    dragElement(plant);
  };
});
```

The document.querySelectorAll method selects all elements with the class plant, and the forEach method loops through each element, adding the onpointerdown event listener.

Save your script.js file. Your final code should look like this:

```javascript
let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

function dragElement(terrariumElement) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  terrariumElement.onpointerdown = pointerDrag;

  function pointerDrag(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    terrariumElement.style.top = terrariumElement.offsetTop - pos2 + "px";
    terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + "px";
  }

  function stopElementDrag() {
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

document.querySelectorAll(".plant").forEach((plant) => {
  plant.onpointerdown = function () {
    dragElement(plant);
  };
});
```

In this final lesson, we reviewed the key concepts we’ve learned throughout this series and ensured that all our plant elements are draggable.

Let’s recap:

- We learned about variables and how they store data.
- We created functions to group our code into reusable blocks.
- We manipulated the DOM to interact with our HTML elements.
- We handled events to respond to user actions.
- We used closures to manage state and keep track of data.
- By combining all these concepts, we created a dynamic and interactive virtual terrarium where the plants can be dragged around the screen.

Thank you for following along. Keep practicing and exploring more about JavaScript to enhance your web development skills. Happy coding!
