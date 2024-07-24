# Introduction To CSS

## 01 - CSS In Action

Welcome back.

In the previous chapter, we learned core concepts of HTML and built out the basic structure for our virtual terrarium.

!!! note "Task: Preview the App"

    Let's see what our digital terrarium looks like now.Preview the webpage using the Live Server extension - or use `python -m http.server 5000` to start a preview server from the terminal. You should see a single page with all images lined up on one side.

In this lesson, we're going to add styles to our online terrarium and learn more about several CSS concepts: like the cascade and inheritance, the use of selectors & properties, positioning, and using CSS to build layouts and position components.

In the process we will slowly transform our terrarium into the stylish home for our plants we always wanted!

## 02 - Stylesheets & Setup

`Stylesheets` are like a collection of design ideas and instructions for your home. Just like you have different design themes for different rooms in your house, stylesheets define the overall look and feel of your website.

Let's quickly look at our HTML code to see how we connect this new "stylesheet" to the "structure" of our web application.

```html
<!-- import the webpage's stylesheet -->
<link rel="stylesheet" href="./style.css" />
```

You learned about the `link` tag in the previous HTML chapter. So all we need to do now is create the stylesheet file named there.

!!! note "Task: Create new `style.css` file"
In your terrarium folder, create a new empty file called style.css. Right now there is nothing in the stylesheet. Let's fix that next.

## 03 - Cascading & Inheritance

`Cascading` is like the flow of design decisions in your home. When you have multiple design ideas for a room, you prioritize them based on importance. Similarly, in CSS, styles cascade from one rule to another, with the most specific rule taking precedence.

In this "cascade",

- the style set by you (the website developer) takes priority over the default style provided by the browser.
- styles you set "inline" in your HTML can override styles you set set externally in a stylesheet.

This gives you more granular control over the styling of every aspect of your webpage. Let's see this in action.

1. **Task**: Add an inline style to our terrarium like this - what happens?

```html
<h1 style="color: red">My Terrarium</h1>
```

1. **Task**: Now try adding this style to the stylesheet - what happens now??

```css
h1 {
  color: blue;
}
```

`Inheritance`:
is like inheriting design elements from your family. Just like you may inherit certain features or design preferences from your parents, in CSS, elements can inherit styles from their parent elements.

1. **Task**: Set the body's font to a given font, and check to see a nested element's font.

```css
body {
  font-family: helvetica, arial, sans-serif;
}
```

1. **Task**: Now open your browser's console to the 'Elements' tab and observe the H1's font. It inherits its font from the body, as stated within the browser

1. **Task**: Can we make a nested element take a different property? Try this - now reload the page and see what happens.

```css
h1 {
  font-family: "Lobster", cursive;
}
```

## 04 - Selectors & Properties

Welcome back! In this lesson, we will learn about CSS Selectors and get familiar with more CSS properties.

`Selectors`:
Selectors are like the tools you use to choose specific areas of your home for improvement. Just like you use a paintbrush to select a specific wall to paint, CSS selectors help you target specific HTML elements to apply styles to.

`Properties`: Properties are like the specific instructions you give to your contractor for each design element in your home. For example, you may specify the color, size, or position of a piece of furniture. In CSS, properties define the specific visual characteristics of an element.

## 05 - Layouts & Positioning

Welcome back! In this lesson, we will learn about

`Layouts`: Layouts are like the floor plans for your home. They determine how different elements are arranged and organized within a space. In CSS, layout techniques like flexbox and grid help you create structured and responsive designs.

`Positioning`: Positioning is like arranging furniture in your home. You can position elements relative to their normal flow or to other elements. CSS provides different positioning options, such as absolute, relative, and fixed, to control the placement of elements on the page.

## 06 - Transitions & Animations

Recap:
Welcome to the final lesson! Today, we'll review what we learned so far - and talk about some advanced concepts like animations and transitions that you can use, to improve the styling of your application even further!

`Animations`:
Animations are like adding dynamic elements to your home. Just like you might have a moving sculpture or a rotating ceiling fan, CSS animations bring elements to life by adding motion and visual effects.

`Transitions`:
Transitions are like smoothly transitioning between different design states in your home. For example, when you open a door, it transitions from closed to open. In CSS, transitions allow you to smoothly change the appearance of an element over a specified duration.

Outro:
Remember - HTML is like the scaffolding for your website and CSS is like the interior design that makes it visually appealing to the users who come there. Now, it's time to bring your web home to life with JavaScript! Stay tuned for the next lesson where we learn to make things a bit more interactive for users.
