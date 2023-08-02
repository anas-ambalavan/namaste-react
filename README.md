## Lesson 09 - Optimizing our App 🚀

#### 🔸 Topics

- Custom Hooks.
- Code Splitting (Also known as Chunking, Lazy Loading, On Demand Loading, Dynamic Bundling, Dynamic import ).

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 6](https://swiggy-clone.notion.site/Swiggy-Clone-Part-6-271a4b8cae3e4cf0a70c66365179af5b?pvs=4)

Please review the full source code.

## Questions:

### 1. When and why do we need lazy() ?

- Our application may be a large-scale app, in which case we will need to optimize it, for which we will create separate bundles for each of the large functionality of the application. This allows us to break down our application code into smaller chunks (or "bundles") and load them on-demand. This can help reduce the initial bundle size of your application, improve performance, and only load the required components when needed.

  ```
    import {lazy} from 'react';

    const MyLazyComponent = lazy(() => import('./MyLazyComponent'));
  ```

### 2. What is suspense ?

- To handle the asynchronous loading and possible errors when using lazy(), you should wrap it with a Suspense component, which displays a fallback while the component is being loaded.
  ```
    <Suspense fallback={<div>Loading...</div>}>
      <MyLazyComponent />
    </Suspense>
  ```

### 3. Why we got this error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error ?

- When we use lazy loading, all the code doesn't come at once, only comes when it is required. This error occurs because the component has been called without the component code being loaded. To fix this issue, we should wrap it with a suspense component, which displays a fallback while the component is being loaded.

### 4. Advantages and disadvantages of using code splitting pattern?

- Advantages:

  - Faster initial load time.
  - Reduced bundle size.
  - Better resource allocation.
  - Improved developer experience.
  - Better caching.

- Disadvantages:
  - Increased complexity.
  - Debugging challenges.
  - Network requests overhead.
  - Not ideal for small applications.
  - Browser compatibility.
