## Lesson 01 - Inception

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

### How to use React using CDN links ?
- Please refer the files App.js and index.html
- [React CDN Links](https://legacy.reactjs.org/docs/cdn-links.html)
