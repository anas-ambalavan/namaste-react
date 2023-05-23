const heading1 = React.createElement("h1", { id: "title 1" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "title 2" }, "Heading 2");
const container = React.createElement(
  "div",
  { id: "container", className: "container" },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
