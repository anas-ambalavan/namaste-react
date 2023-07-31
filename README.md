## Lesson 07 - Finding the path 🚀

#### 🔸 Topics

- Routing.
- Restaurant Menu.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 4](https://swiggy-clone.notion.site/Swiggy-Clone-Part-4-32d31f1b547a48a49068375594beeed8)

Please review the full source code.

## Questions:

### 1. What are various ways to add images into our App ? Explain with code examples?

- Using import

  ```
      import logo from './logo.png'

      <img src={logo} className="App-logo" alt="logo" />

  ```

- Images From HTTP
  ```
     <img src="https://........." alt="" />
  ```
- Images in CSS.
  ```
      .logo {
          background-image: url(./logo.png);
      }
  ```
- Using require() Function
  ```
      <img
        src={require('./logo.png')}
        alt="logo"
      />
  ```

### 2. What would happen if we do console.log(useState()) ?

- It will print an array.

### 3. How will useEffect behave if we don't add a dependency array ?

- useEffect runs on each render cycle.

### 4. What is SPA ?

- SPAs(Single Page Application) are web applications that operate within a single webpage. SPAs use JavaScript frameworks to dynamically update the page's content instead of loading new pages from the server.

### 5. What is difference between Client Side Routing and Server Side Routing ?

- `Client-side routing` and `Server-side routing` are two different approaches used in web development to handle navigation and content rendering.
- `Client-side routing` involves handling routing logic on the client's web browser using JavaScript. When a user clicks on a link or enters a URL, the browser updates the content dynamically without full-page reloads.
- `Server-side routing` processes routing logic on the server. When a user requests a page, the server returns the complete HTML content for that route. This approach offers better initial loading time and SEO performance but may result in slower navigation and increased server requests.
