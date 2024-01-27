const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const inputDirectory = "input";
const outputDirectory = "output";

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Read all files from the input directory
const files = fs
  .readdirSync(inputDirectory)
  .filter((file) => file !== ".DS_Store");

// Process each file
files.forEach((file) => {
  console.log("file", file);
  const filePath = path.join(inputDirectory, file);
  const jsxCode = fs.readFileSync(filePath, "utf-8");

  const ast = parser.parse(jsxCode, {
    sourceType: "module",
    plugins: ["jsx"],
  });

  // Initialize the JSON structure for each file
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

  // Save the JSON structure to the output directory with the same filename
  const outputFilePath = path.join(
    outputDirectory,
    `${file.replace(/\.jsx$/, "")}.json`
  );
  fs.writeFileSync(outputFilePath, JSON.stringify(jsonStructure, null, 2));
});

console.log("Conversion completed!");
