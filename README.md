## Lesson 10 - Adding Tailwind CSS to our App 🚀

#### 🔸 Topics

- Adding Tailwind CSS.

#### 🔸 Follow the link to build the application step-by-step:

- [Swiggy Clone - Part 7](https://swiggy-clone.notion.site/Swiggy-Clone-Part-7-5a1aa649cf0e4999a045ae7d82f9140e?pvs=4)

Please review the full source code.

## Questions:

### 1. In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins) ?

- content: This key defines the files that Tailwind should scan for Tailwind directives.
- theme: This key defines the colors, fonts, and other values that are used to generate Tailwind utility classes.
- extend: This key allows you to add custom Tailwind utility classes.
- plugins: This key allows you to add third-party plugins that extend the functionality of Tailwind.

### 2. why do we have .postcssrc file?

- The .postcssrc file is used to configure PostCSS. PostCSS is a tool that can be used to transform CSS files.
- If we add TailwindCSS as a plugin ,the .postcssrc file is used to tell PostCSS to use the TailwindCSS plugin to transform CSS files. The TailwindCSS plugin will add Tailwind's utility classes to the CSS files, which we can then use to style our components.
