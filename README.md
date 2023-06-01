## Lesson 02 - Ignite Our App 🚀

In this lesson, we are going to ignite our App using Parcel.

#### 🔸 Step 1:
To our existing app, adding `parcel`. for that first we need to use any package manager, here we are using npm.

- npm initializing:
  ```
  npm init -y
  ```
- Installing parcel as devDependency:
  ```
  npm i -D parcel
  ```

#### 🔸 Step 2:
We are removing the CDN Links and adding react using npm.

- Installing React and ReactDOM :
  ```
  npm i react react-dom
  ```

In `index.html` do the following:
1. Remove the cdn links (scripts).
2. Add the type attribute as module to the script tag that imports App.js to enable imports and exports.
    ```
    <script type="module" src="App.js"></script>
    ```


#### 🔸 Step 3:
Import React and ReactDOM in App.js.
```
import React from 'react';
import ReactDOM from 'react-dom/client'
```
#### 🔸 Step 4:
Let's run our application using Parcel.
  ```
  npx parcel index.html
  ```

- For production build, use this command:
  ```
  npx parcel build index.html
  ```
- Add scripts for `start` and `build` with parcel commands:
  ```
  "scripts": {
      "start":"parcel index.html",
      "build":"parcel build index.html",
      "test": "jest"
    },
  ```
- Now we can use these commands:<br><br>
  to run the application:
  ```
  npm start
  ```
  to build:
  ```
  npm run build
  ```
- If you are facing any issues while building, remove this line from package.json.
  ```
  "main": "App.js",
  ```

- Create `.gitignore` file and add these lines:
  ```
  node_modules
  .parcel-cache
  dist
  ```

- Add Browserslists to package.json file:
  ```
  "browserslist": [
      "last 2 versions"
    ]
  ```


## Questions:
### 1. what is NPM ?
> NPM is a Package manager and is primarily used for managing and sharing reusable code modules or packages.

### 2. What is Parcel/Webpack ? Why do we need it ?
> Parcel and Webpack are bundlers that simplify the process of building JavaScript applications by handling dependencies, optimizing code and assets, and providing useful developement features.

### 3. What is  `.parcel-cache` ?
> It is a folder which parcel generates for caching.

### 4. What is  `npx` ?
> Executing using npm. stands for `Node Package Execute`.

### 5. What is the difference between  `dependencies` vs `devDependencies` ?
>  Dependencies are necessary for the project's runtime and are installed both in development and production environments, while devDependencies are specific to the development process and are not included in the production environment.

### 6. What is Tree Shaking ?
> Tree Shaking is a optimization technique that helps reduce the bundle size by eliminating unused code(removal of dead code).

### 7. What is Hot Module Replacement ?
> Hot Module Replacement(HMR) is a feature that enables to see code changes in the browser without having to refresh it. HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. 

### 8. List down 5 superpowers of Parcel ?
> 1. Zero Configuration.
> 2. Dev Server: Parcel provides dev server.
> 3. Hot Reloading: By default, Parcel fully reloads the page, but in some cases it may perform HMR.
> 4. Dev server supports https: Parcel’s dev server supports HTTPS out of the box. You can either use an automatically generated certificate, or provide your own.
> 5. Image optimization: Parcel supports resizing, converting, and optimizing images by using query params.

### 9. What is `gitignore`? What should we add and not add into it ?
> gitignore is a text file, it contains the files and directories should be ignored and not tracked by Git. Anything we can generate on the server will be put inside gitignore.

### 10. What is the difference between `package.json` and `package-lock.json` ?
>  `package.json` is a manually created file that lists the dependencies required by the project, while `package-lock.json` is an automatically generated file that records the specific versions of the dependencies installed in the project to ensure consistent builds.

### 11. Why should  I not modify `package-lock.json` ?
> `package-lock.json` serves as a record of the exact versions and dependencies of the packages that were installed. Modifying it manually can lead to inconsistencies and compatibility issues.

### 12. What is `node_modules` ? Is it good idea to push that on git ?
> `node_modules` is a directory which contains the actual code of the dependencies, along with any additional files they may require, such as configuration files or documentation. It is created when installing dependencies for the project using any package manager. never push this node_modules to git, because we can re-generate node_modules by using `package-lock.json` file.

### 13. What is the `dist` folder ? 
> `dist` folder is production build of the application. It is the output directory where bundlers, bundles and builds the project files for production or deployment. It contains minified and concatenated versions of all files.

### 14. What is `browserslist` ? 
> `browserslist` is a tool which will make code compatible for lot of browsers.
- Configuring browserlist :-
  add browserlist config in package.json file.
  ```
  "browserslist": [
    "last 2 versions"
  ]
  ```
  In browserslist we can add query composition. [For more details.](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z) <br>

