## Lesson 08 - Let's get Classy 🚀

#### 🔸 Topics

- Class based components.
- React lifecycle methods.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 5](https://swiggy-clone.notion.site/Swiggy-Clone-Part-5-fdb9e8da429e4d7085888e7bd19cd4b4?pvs=4)

Please review the full source code.

## Questions:

### 1. How do you create Nested Routes react-router-dom configuration ?

- ```
  import {createBrowserRouter} from 'react-router-dom';

  const appRoutes = createBrowerRouter([
    {
      path:'/',
      element: <AppLayout>,
      children:[
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          element: <AuthLayout />
          children:[
            {
              path:'login',
              element: <Login />,
            },
            {
              path:'register',
              element: <Register />,
            }
          ]
        }
      ]
    }
  ])
  ```

### 2. What is the order of lifecycle method calls in Class Based Components ?

1. constructor()
2. render()
3. componentDidMount()
4. componentDidUpdate()
5. componentWillUnmount()

- ref: [React lifecycle method diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

### 3. Why do we use componentDidMount ?

- This method is used to do side effects that need to be performed only once, like fetching data from an API or subscribing to events.

### 4. Why do we use componentWillUnmount ? Show with example.

- `componentWillUnmount` is used to handle cleanup operations when a component is about to be removed from the DOM. In order to prevent memory leaks and potential issues, it provides a way to release resources, cancel network requests, and unsubscribe from event listeners.
- ```
    componentDidMount(){
      this.timer = setInterval(()=>{
        console.log("set Interval");
      }, 1000)
    }

    componentWillUnmount(){
      clearInterval(this.timer);
    }
  ```

### 5. Why do we use super(props) in constructor?

- By calling super(props), it ensures that the base class (React.Component) is correctly initialized with the props, allowing you to access and use this.props throughout your component's methods and lifecycle. Without this call, this.props would be undefined, leading to potential errors when accessing the component's props.

### 6. Why can't we have the callback function of useEffect async?

- When using useEffect, React expects the callback function to either return nothing or return a clean-up function (for handling the cleanup of effects). If the callback function were allowed to be marked as async, it would return a Promise implicitly. This could lead to unexpected behavior or complications in managing side effects.
