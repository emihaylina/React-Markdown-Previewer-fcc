function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  } 
  return obj;
}

const initialState = `
  This is a paragraph
 
  # Heading
  ## Heading 2
 
  > Block Quotes!
 
  **This is bolded text**
 
  - list item 1
 
  - list item 2
 
  - list item 3
 
  [This is a link](https://ru.reactjs.org/)
 
  This is a inline \`<div></div>\`
 
  This is a block of code
  
  \`\`\`
  let a = 5;
  let b = 2;
  let c = a / b;
  \`\`\`
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", { text: initialState });
    _defineProperty(this, "handleChange",
    e => {
      this.setState({ text: e.target.value });
    });
  }

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return 
      React.createElement("div", null,
        React.createElement("h2", { className: "text-center m-4" }, "Convert your Markdown"),
          React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-6" },
              React.createElement("h5", null, "Enter your markdown here:"), 
              React.createElement("textarea", { className: "form-control", id: "editor", value: text, onChange: this.handleChange })
            ),
            React.createElement("div", { className: "col-6" }, 
              React.createElement("h5", null, "Result"), 
              React.createElement("div", { className: "preview rounded", dangerouslySetInnerHTML: { __html: markdown }, id: "preview" })
            )
          )
        )
      );
    }
  }

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
