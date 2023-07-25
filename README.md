## Lesson 05 - Let's get Hooked 🚀

#### 🔸 Topics

1. File structure.
2. Introdution to Hooks.
3. useState Hook.
4. Filter the restaurant data.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 2](https://swiggy-clone.notion.site/Swiggy-Clone-Part-2-e6cb5b3d1fc5459f93db352b60247928)

Please review the full source code.

## Questions:

### 1. What is the difference between Named Export, Default export and \* as export ?

- Named Import and Exports:

  For example, if we export like this in `constants.js`:

  ```
    export const CDN_URL = '....';
  ```

  We can import CDN_URL by the following syntax:

  ```
    import {CDN_URL} from './src/utils/constants.js'
  ```

- Default Import and Exports:

  For example, if we have a `card component`:

  ```
    const Card = () => {
      return (
        <div>...</div>
      )
    }

    export default Card;
  ```

  We can import the Card Component by the following syntax:

  ```
    import Card from './src/components/Card.js'
  ```

- `*` as Import and Exports:

  For example, if we have multiple constants in `constants.js`:

  ```
    export const CDN_URL = '....';
    export const LOGO_URL = '....';
  ```

  We can import the Constants by the following syntax:

  ```
    import * as Constants from './src/utils/constants.js'

    Constants.CDN_URL // it prints the CDN_URL
    Constants.LOGO_URL // it prints the LOGO_URL
  ```

### 2. What are React Hooks ?

> React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.

### 3. Why do we need a useState Hook ?

> To manage states. Returns a stateful value and an updater function to update it.
