## Lesson 12 - Let's build our store 🚀

#### 🔸 Topics

- Redux Toolkit.
- Cart Functionality.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 9](https://swiggy-clone.notion.site/Swiggy-Clone-Part-9-cbb3e102631845d0b3565bcad7a5db2e?pvs=4)

Please review the full source code.

## Questions:

### 1. useContext vs Redux ?

- useContext:
  - useContext is a React Hook that allows components to access the context (global) state without prop drilling (passing props through multiple levels of components).
  - It's suitable for simpler cases where you need to share state between a few components that are closely related, such as theming or user authentication.
  - It is built into React and doesn't require any additional libraries.
  - It's easier to set up and use compared to Redux.
- Redux:
  - Redux is a state management library that provides a more structured and centralized way to manage the state of a React application.
  - It's designed to handle complex state interactions, asynchronous actions, and applications with large amounts of shared state.
  - Redux separates the state from the UI components and uses a predictable state container and a unidirectional data flow, which can make debugging and testing easier.
  - Redux has a more robust ecosystem, including tools like Redux DevTools for time-travel debugging and middleware support for handling asynchronous actions.

### 2. Advantages of using Redux Toolkit over Redux ?

- Redux Toolkit offers several advantages over using Redux alone
  - Redux Toolkit significantly reduces the amount of boilerplate code needed to set up and manage a Redux store.
  - Redux Toolkit's createSlice function abstracts away much of the complexity of writing reducers.
  - Redux Toolkit internally uses the immer library to handle immutable updates to the state.
  - Redux Toolkit encourages the use of immutable data structures, which can help prevent accidental mutations of the state.

### 3. Explain Dispatcher ?

- Dispatcher is a function responsible for sending actions to update the application's state. It acts as a central hub for managing state changes and triggering the appropriate updates throughout the application.

### 4. Explaing Reducer ?

- A reducer is a function that specifies how the application's state should change in response to dispatched actions.

### 5. Explain Slice ?

- A slice is a concept that represents a self-contained portion of the Redux store. It encapsulates the logic related to a specific piece of state, including the reducer, actions, and action creators.

### 6. Explain Selector ?

- A selector is a function that retrieves specific pieces of state from the Redux store.

### 7. Explain createSlice and the configuration it takes ?

- createSlice is a function provided by Redux Toolkit that simplifies the process of creating and managing Redux state slices.
- `createSlice` function and its configuration:

  ```
     createSlice({
          name: 'sliceName',
          initialState: {},
          reducers: {
              actionName: (state, action) => {/* Reducer logic */}
          }
      });

  ```
