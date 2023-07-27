## Lesson 06 - Exploring the world 🚀

#### 🔸 Topics

1. Fetching data from Swiggy's live API.
2. Shimmer UI.
3. Conditional rendering.
4. Search functionality.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 3](https://swiggy-clone.notion.site/Swiggy-Clone-Part-3-defe3a29d098471e92ba442acd8e5bde)

Please review the full source code.

## Questions:

### 1. What is a Microservices ?

- Microservices is an architectural style that structures an application as a collection of loosely coupled services. Each service has its own job. Communication between services is done through APIs.

### 2. What is Monolith architecture ?

- A monolithic architecture combines all the software components into a single unit. A change to one component could affect others, so all the components must be present for the software to run.

### 3. What is the difference between Monolith and Microservice?

- Monolithic applications are one big unified unit, while microservices are smaller units.

### 4. Why do we need a useEffect Hook ?

- The useEffect hook allows us to perform side effects in our components. Side effects are any actions that our component takes that affect the outside world. For example, fetching data from an API, updating the DOM, or subscribing to an event.

### 5. What is Optional Chaining ?

- Optional chaining is a feature that provides a concise and safe way to access the properties and methods of nested objects or arrays without worrying about intermediate properties. Without optional chaining, accessing nested properties could lead to errors if any intermediate property is null or undefined.

### 6. What is Shimmer UI ?

- Shimmer UI is a technique used in UI design to provide visual feedback and indicate that content is loading or being fetched.

### 7. What is the difference between JS expression and JS statement ?

- JavaScript Expression: An expression is any piece of code that evaluates to a value.

- JavaScript Statement: A statement is a complete unit of code that performs an action or instruction.

### 8. What is a Conditional Rendering, explain with a code example ?

- Conditional rendering is the process of displaying different content based on certain conditions or states.

```
    const SampleComponent = ({ isLoggedIn }) => {
      return (
        <div>
          {isLoggedIn ? <p>Welcome back, User!</p> : <p>Please log in to continue.</p>}
        </div>
      );
    };

    export default SampleComponent;

                  or

    const SampleComponent = ({ isLoggedIn }) => {
      if (isLoggedIn) {
        return <p>Welcome back, User!</p>;
      } else {
        return <p>Please log in to continue.</p>;
      }
    };

    export default SampleComponent;
```

### 9. What is CORS ?

- CORS stands for Cross-Origin Resource Sharing. It is a mechanism that allows restricted resources on a web page to be accessed from another domain outside the domain from which the first resource was served.

### 10. What is async and await ?

- Async and await allow you to write asynchronous code in a shorter and readable way.

### 11. What is the use of `const json = await data.json();` in fetchData() function ?

- this code fetches JSON data from a server, waits for the data to be fetched and parsed, and then stores it in the json variable.
