## Lesson 01 - Inception 🚀

In this lesson, we will start from scratch. 
### Sections:
- How we worked before React.js came.
- How to add React to HTML using React CDN Links.

### 📋 How we worked before React.js came

#### 🔸 Step 1:
Create a HTML file with a div having an id="root".

- index.html:
  ```
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React</title>
      </head>
      <body>
        <div id="root"></div>
      </body>
    </html>
  ```


#### 🔸 Step 2:
Create a H1 tag and add it to the root using JavaScript.

- Add this script inside the body tag:
  ```
  <script>
  
    const h1 = document.createElement('h1');
    h1.innerHTML = "Hello world! from JavaScript"

    const root = document.getElementById('root');
    root.appendChild(h1);
  
  </script>
  ```
This is how we did before React came.

### 📋 How to add React to HTML using React CDN Links

#### 🔸 Step 1:
Injecting React to our code using React CDN Links.

- Remove the existing script from `index.html`.
- Add these [CDN links](https://legacy.reactjs.org/docs/cdn-links.html) to index.html inside the body tag.
  ```
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  ```
#### 🔸 Step 2:
Create an App.js file.
- Add this script to App.js:
  ```
  const heading = React.createElement("h1", {}, "Heading 1");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(heading);
  ```
  
  - createElements(arg1, agr2, arg3): to create an Element. it will return an Object. createElements takes three agruments,,
    - arg1: the tag
    - arg2: `{}` Object which needs to set the attribute (props, like id, class(in React it is className)).
    - arg3: Whatever we need to put inside the tag.
  - React.createElement() => returns an Object => render(converts the object into HTML) => HTML(Browser Understands)
  - ReactDOM.createRoot(): Create a root to render the elements.
  - root.render() : it will render the elements inside root.
    
    
- Link the App.js file to the index.html after the CDN links in the body tag (order of the scripts is important).
  ```
  <script src="App.js"></script>
  ```
- Creating nested structure:
  ```
  <div id="container" class="container">
    <h1>heading 1</h1>
    <h2>heading 2</h2>
  </div>
  ```
  Code for the above structure :
  ```
  const heading1 = React.createElement("h1", { id: "title 1" }, "Heading 1");
  const heading2 = React.createElement("h2", { id: "title 2" }, "Heading 2");
  const container = React.createElement(
    "div",
    { id: "container", className: "container" }, // attributes, here you can see className, in React class=>className
    [heading1, heading2] // If we have siblings we need to put all those elements in an array.
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(container);
  ```

Now React is added to the HTML 🔥

## Questions:
### what is Emmet ?

> Emmet is a free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, developers type less, they save both on keystrokes and time. Also relying on Emmet's auto completion means fewer typos and missing tags, leading to more robust and valid files.

### Difference between a Library and Framework ?
> A library provides specific functionality that can be used by developers to solve particular tasks, while a framework provides a comprehensive architecture and set of tools to guide and structure the development of an application. Libraries are more flexible and can be used in various ways, whereas frameworks enforce a specific structure and design pattern.

### What is CDN ? and Why do we use it ?
> CDN stands for Content Delivery Network. It is a distributed network of servers located in various geographical locations around the world. The purpose of a CDN is to deliver content, such as web pages, images, videos, and other files, to users in the most efficient and reliable manner possible.

### Why is React known as React ?
> React, also known as React.js or ReactJS, is a JavaScript library for building user interfaces. It was developed by Facebook and was first released in 2013. The name "React" comes from the concept of reacting to changes in data and efficiently updating the user interface based on those changes.

### What is crossorigin in the script tag ?
> The crossorigin attribute sets the mode of the request to an HTTP CORS Request. Web pages often make requests to load resources on other servers. Here is where CORS comes in. A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

### What is the difference between React and ReactDOM ?
> React is the core library for building UI components and managing their state, while ReactDOM is a package that facilitates the rendering of those components into the browser's DOM. React focuses on the component logic, while ReactDOM handles the interaction between React and the browser environment.

### What is difference between react.development.js and react.production.js files via CDN ?
> `react.development.js` is used during development and provides a non-minified and unoptimized version of React. It includes extra warnings and debugging information, making it helpful for developers during the development and debugging process. However, it is not recommended for production environments due to its larger file size and potential impact on performance.<br>
`react.production.js` is optimized for production environments. It is a minified and optimized version of React, resulting in a smaller file size and improved performance. It excludes development-specific warnings and debugging features, making it suitable for efficient production deployments.

### What are async and defer ?
> The async and defer attributes both allow the browser to continue parsing the HTML document while JavaScript files are being downloaded, but they differ in when those files are executed.<br>
Async downloads and executes JavaScript as soon as it’s available, while defer attribute waits until the HTML document has been parsed before downloading and executing any external scripts.

### How to configure React using CDN links ?
- Please refer the files App.js and index.html
- [React CDN Links](https://legacy.reactjs.org/docs/cdn-links.html)
