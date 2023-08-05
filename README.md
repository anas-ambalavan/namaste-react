## Lesson 11 - Data is the new oil 🚀

#### 🔸 Topics

- Lifting State Up.
- React Context API.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 8](https://swiggy-clone.notion.site/Swiggy-Clone-Part-8-ca0a2d76d8ec4a50ac92bed8e3c0415c?pvs=4)

Please review the full source code.

## Questions:

### 1. What is prop drilling ?

- `prop drilling` is a term used to describe a situation where props need to be passed through multiple intermediate components in order to reach a deeply nested child component that requires those props.

### 2. What is lifting the state up?

- `lifting state up` refers to a pattern used to manage and share state data between components in a React application. It involves moving the state data from a lower-level component to a higher-level component in the component tree so that multiple components can access and modify the same state.

### 3. What are Context Provider and Context Consumer?

- In React, the Context API consists of two main components: the `Context Provider` and the `Context Consumer`. The Context Provider is a component that holds the data or state you want to share with its child components. It acts as the source of truth for the data and uses the React.createContext() method to create a new context. The data is passed down to child components through the value prop.

The `Context Consumer`, or the useContext Hook (for functional components), allows components to access the data provided by the Context Provider without prop drilling. It enables components to consume the context data directly and use it in their rendering or logic.

### 4. If you don't pass a value to the provider does it take the default value?

- Yes, if you don't pass a value to the Context Provider, it will take the default value specified when creating the context.
