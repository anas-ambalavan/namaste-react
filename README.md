## Lesson 03 - Laying the foundation 🚀

In this lesson, we will use JSX and create a header component.

#### 🔸 Step 1:

Install [Heroicons](https://heroicons.com/)

```
npm install @heroicons/react
```

#### 🔸 Step 2:

- Remove the existing React.createElement code from App.js.
- In the following steps, changes are made to App.js file.

#### 🔸 Step 3:

Create a react element as SubTitle.

```
const SubTitle = <h3>Namaste React - React Element</h3>;
```

#### 🔸 Step 4:

Create a react component as Title and include the SubTitle react element into it.

```
const Title = () => (
  <div id="title" className="title" tabIndex={1}>
    <h1>Welcome!</h1>
    {SubTitle}
  </div>
);
```

#### 🔸 Step 5:

Create a Header component with a logo on left, a search bar in the middle and a User icon on the right.

- Import UserIcon from heroicons

  ```
  import { UserCircleIcon } from "@heroicons/react/24/solid";
  ```

- Download a logo and place it in an asset folder and import it into App.js:

  ```
  import Logo from "./assets/logo.png";
  ```

- Header component

  ```
  const Header = () => (
    <div className="header-container">
      <div className="image-container">
        <img
          className="image"
          width={"100%"}
          height={"100%"}
          src={Logo}
          alt="logo"
        />
      </div>
      <input className="search-bar" type="text" placeholder="Search..." />
      <div className="section-right">
        <UserCircleIcon width={30} />
      </div>
    </div>
  );
  ```

#### 🔸 Step 6:

Add the Header and Title components to the Main component.

```
const Main = () => (
  <> // Empty tag or React Fragment
    <Header />
    <Title />
  </>
);
```

#### 🔸 Step 7:

Change the render.

```
root.render(<Main />);
```

#### 🔸 Step 8:

Adding CSS for style

- index.css:
  It's a sample CSS you can modify according to your needs.

  ```
  body {
    margin: 0;
  }

  .header-container {
    padding: 10;
    background-color: lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .image-container {
    margin-right: 15;
    margin-left: 15;
    width: 30px;
    height: 30px;
  }

  .search-bar {
    padding-left: 15;
    height: 30px;
    width: 280px;
    border-radius: 5;
    border: 0.5px solid gray;
    margin-left: 15px;
  }

  .section-right {
    cursor: pointer;
  }
  ```

Please review the full source code.

## Questions:

### 1. What is JSX ?

> JSX is an HTML-like syntax. It is JS syntax which creates React elements. JSX is not HTML. Meta develops it. JSX is not HTML inside JavaScript.

### 2. Superpowers of JSX ?

> - HTML-like syntax.
> - Component Composition.
> - Expressions within Curly Braces.
> - Component Props.
> - Support the use of Fragments.

### 3. Benefits of JSX ?

> - inside Curly Braces `{}` we can write any piece of JS code and JSX will optimize and sanitise the code, it prevents from XSS attack.
> - we can use `<></>` (Fragments) empty tags.

### 4. Behind the Scenes of JSX ?

> Babel converts JSX behind the scenes into browser understandable code. JSX => React.createElement => JS Object => HTML

### 5. Babel & parcel role in JSX ?

> Parcel will transpile the code using Babel. Babel converts JSX behind the scenes into browser understandable code.

### 6. React.createElement vs JSX ?

> - React.createElement : used to create react elements, direct return an JS Object.
> - JSX : used to create react elements, babel transpile into react elements, then converted into JS object.

### 7. Components ?

> A React component is like a JavaScript function or class that returns JSX elements.

### 8. Functions Components ?

> Functions Components are normal Javascript functions. It will return JSX or react elements.

### 9. Composing Components ?

> Components inside a component.

### 10. `{TitleComponent}` vs `{<TitleComponent />}` vs `{<TitleComponent></TitleComponent>}` in JSX ?

- Rendering react element.

```
const TitleComponent = <h1>Hello World</h1> // React Element

const Main = () => (
  <div>
    {TitleComponent}
    <h2>Welcome</h2>
  </div>
)

```

- Rendering react component.

```
// React Component
const TitleComponent = () =>
(
  <h1>Hello World</h1>
)

const Main = () => (
  <div>
    {<TitleComponent />}
    {<TitleComponent></TitleComponent>}
    <h2>Welcome</h2>
  </div>
)

```
