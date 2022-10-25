import Identifier from "./nodes/Identifier.js";

export function babelPlugin() {
  return {
    name: "babel-plugin",
    visitor: {
      Identifier,
    },
  };
}
