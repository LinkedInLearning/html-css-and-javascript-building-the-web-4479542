# Introduction to HTML

!!! note "Task: Preview The Terrarium"

    Let's preview the finished Terrarium app to see what we are trying to build today.

## 01 Document Structure

Today we’ll get started building our virtual terrarium while learning the foundational concepts of HTML.

Let's start with the document structure. The `<!DOCTYPE html>` declaration at the top of our file tells the browser we’re using HTML5. This is important for ensuring modern web standards are followed.

Begore we move on, let's talk about elements and tags. Elements are the building blocks of HTML, and they consist of an opening tag, content, and a closing tag. Tags are keywords surrounded by angle brackets that define the structure of our content. We'll be working with various tags and elements as we build our terrarium.

We’ll start by adding a heading using the `<h1>` tag. This tag represents the most important heading on the page, and it’s typically used for the main title or headline.

Next, we add the `<html>` element. This is the root of our document.

Inside the `<html>` tag, we create two main sections: `<head>` and `<body>`. The `<head>` contains meta-information, like the document’s title, while the `<body>` holds the main content that will be displayed on the webpage.

Finally, we add a `<title>` tag within the `<head>` with the text "Welcome to my Virtual Terrarium". This title appears in the browser tab and is important for user experience and SEO.

## 02 Document Organization

In this lesson, we will add some key elements to our document and discuss document organization.

First, inside the `<head>` section, add a `<meta>` tag. Metadata provides information about the document, such as its author, description, and keywords. This information is used by search engines and browsers to better understand and display our content.

Next, let’s link some external resources to our document. Add a `<link>` tag to link our stylesheet. This allows us to style our webpage with custom CSS. Then, add a `<script>` tag to link our JavaScript file. These external resources will enhance the functionality and appearance of our webpage. We’ll cover the specifics of these tags and their attributes in future lessons.

Now, let’s organize our content by creating a main container. Inside the `<body>` section, add a `<div>` element. This `<div>` will act as a container that wraps all our content. Using `<div>` elements to group content is a common practice in HTML, as it helps us organize the page structure and apply styles more effectively.

Let's further organize our content by adding another container for plant images. Inside the main `<div>`, add another `<div>` element. This will serve as a placeholder for our plant images. Grouping elements using `<div>` allows us to manage and style similar elements together, making our HTML more organized and easier to maintain.

We’ve added the basic structure and elements for our virtual terrarium. In the next lesson, we’ll explore attributes and how they provide additional information about HTML elements.

## 03 Document Attributes

Here we'll explore attributes and how they provide additional information about HTML elements.

Attributes are used to specify properties like character encoding, viewport settings, IDs, classes, and alternative text for accessibility. We’ll be using attributes to enhance our document and make it more interactive.

First, let's the `lang` attribute to the `html` element. It specifies the language of our content, which is useful for accessibility and SEO.

Next, we'll update our metadata tags with attributes. Inside the `<head>` section, update the `<meta>` tag to include the `charset="utf-8"` attribute. This specifies the character encoding for our document, ensuring that text is displayed correctly. Using UTF-8 is standard practice because it supports a wide range of characters and symbols.

Now, add another `<meta>` tag with the `name="viewport"` and `content="width=device-width, initial-scale=1"` attributes. This is crucial for responsive design. It ensures our webpage scales correctly on different devices, providing a better user experience on both desktops and mobile phones.

Next, let’s add attributes to our external resource tags. Update the `<link>` tag to include the `rel="stylesheet"` and `href=""` attributes. The `rel` attribute specifies the relationship as a stylesheet, and the `href` attribute provides the path to the CSS file. Then, update the `<script>` tag to include the `src=""` and `defer` attributes. The `src` attribute specifies the path to the script, and the `defer` attribute ensures the script loads after the HTML is fully parsed, which helps improve page load speed and performance.

Now, let’s add attributes to our div containers. Add the `id="page"` attribute to the main container `<div>` and the `class="container"` attribute to the plant container `<div>`. The `id` attribute uniquely identifies an element, which is useful for applying specific styles in CSS and targeting it with JavaScript. The `class` attribute allows us to apply the same styles to multiple elements.

Finally, let's add some plant images. Inside the `<div class="container">`, add multiple `<div class="plant-holder">` elements. Each plant holder will contain an `<img>` element for a plant image. For example, add `<img class="plant" id="plant1" src="./images/plant1.png" />` inside a plant holder. The `src` attribute specifies the path to the image file.

Repeat this for as many plants as you want to include. Here's the completed code for the terrarium.

## 04 Document Accessibility

In this final lesson, we’ll focus on document accessibility and how to make our content more inclusive.

Accessibility ensures that all users, including those with disabilities, can access and interact with our webpage. Using attributes like `alt` for images provides text descriptions that screen readers can use to describe the images to visually impaired users.

We'll add the `alt` attribute in the `<img>` tags. It provides a text description of the image. This is useful for accessibility, as screen readers use this text to describe the image to visually impaired users. It also helps search engines understand the content of the image.

Semantic tags, such as `<h1>`, `<nav>`, and `<footer>`, help screen readers understand the structure and hierarchy of the content, making it easier to navigate.

By incorporating these practices, we create a more inclusive web experience that benefits all users. Remember, accessibility is not just about following standards; it's about making the web usable for everyone.

## 05 Putting It All Together

Now that we've covered the basics of HTML and document accessibility, let's put it all together to create our virtual terrarium. You can follow along in the handout and repository resources provided.

[Talk through the process of adding the elements, attributes, and images to build the terrarium.]

Close out:
We've covered the basics of HTML and got a great start on our terrarium. Stay tuned as we dive into styling our terrarium using CSS.
