import { babelPlugin } from "../src/index.js";
import { transformSync } from "@babel/core";
import cliTable from "cli-table";
import cliHeighlight from "cli-highlight";

const { highlight } = cliHeighlight;
const Table = cliTable;

const src = `const square = n => n ** 2;`;
const { code } = transformSync(src, {
  plugins: [babelPlugin],
});
const table = new Table({
  head: ["Source", "Output"],
  colWidths: [40, 40],
});

table.push([
  highlight(src, { language: "javascript", ignoreIllegals: true }),
  highlight(code, { language: "javascript", ignoreIllegals: true }),
]);

// Toggle this for sane error reporting.
console.clear();
console.log(table.toString());
