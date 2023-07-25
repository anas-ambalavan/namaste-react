## Lesson 04 - Talk is cheap, show me the code! 🚀

In this lesson, we will build a Swiggy clone.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 1](https://swiggy-clone.notion.site/Swiggy-Clone-Part-1-a56612fbc0bc4621a607897256fa1295)

Please review the full source code.

## Questions:

### 1. Is JSX mandatory for React ?

> No.

### 2. Is ES6 mandatory for React ?

> No.

### 3. How can I write comments in JSX ?

> `/* */` is used inside curly braces to write comments in JSX.

```
  {/* <h1>Hello! Welcome</h1> */}
```

### 4. What is <React.Fragment></React.Fragment> and <></> ?

> React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.

> <></> : Short Syntax for declaring fragments.

### 5. What is Virtual DOM?

> It's a representation of Actual DOM. it's like a object represention.

### 6. What is Reconciliation in React ?

> It is the process of updating the UI in response to changes in the component state.

> Reconciliation occurs whenever something changes on the UI.

### 7. What is React Fiber ?

> After React v16, Reconciliation is known as React Fiber.

> React Fiber is new way of finding the difference and updating the DOM. (reimplementation of React's core algorithm)

### 8. Why we need keys in React ? When do we need keys in React ?

> Whenever we render lists, we need keys because if there is no key, react will clean all the list items and render, which will affect performance.

> If keys are mentioned in the list items, then react will only update the specific element rather than the entire list.

> Keys play a crucial role in the reconciliation process

### 9. Can we use index as keys in React ?

> Never use index as key. it's a bad practice.

### 10. What is props in React ?

> Props => Properties

> Props in React are inputs into components.

> Passing a prop into a component is just like passing arguments into a function.

### 11. What is Config Driven UI ?

> Controlling the UI using configs, configs come from the backend, it is known as Config Driven UI.
