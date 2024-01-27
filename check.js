const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const jsxCode = fs.readFileSync("your-file.jsx", "utf-8");

const ast = parser.parse(jsxCode, {
  sourceType: "module",
  plugins: ["jsx"],
});

// Initialize the JSON structure
const jsonStructure = {
  title: "Default Title",
  content: [],
};

traverse(ast, {
  JSXOpeningElement(path) {
    if (path.node.name.name === "StWrapper") {
      let pathIndex;
      for (let i = 0; i < path.node.attributes.length; i++) {
        if (path.node.attributes[i].name.name == "title") {
          pathIndex = i;
          break;
        }
      }
      jsonStructure.title =
        path.node.attributes[pathIndex].value.expression.value;
    }

    if (path.node.name.name === "SubHeader") {
      let tmp = {
        type: "SubHeader",
        title: path.node.attributes[0].value.value,
      };
      jsonStructure.content.push(tmp);
    }

    if (path.node.name.name === "St") {
      let tmp = {
        type: "St",
        lines: [],
      };
      for (let i = 0; i < path.node.attributes.length; i++) {
        tmp.lines.push(path.node.attributes[i].value.expression.value);
      }
      jsonStructure.content.push(tmp);
    }
  },
});

// Do something with the JSON structure, such as saving it to a file
fs.writeFileSync("output.json", JSON.stringify(jsonStructure, null, 2));
