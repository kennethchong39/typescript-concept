/**
 * to compile ts file - use `tsc file.ts`
 */

/**
 * to use watch mode - use `tsc file.ts --watch`
 */

/**
 * to initialize the project to typescript - use `tsc --init` provides the tsconfig.json
 * to compile entire project - use `tsc`
 */

/**
 * including & excluding files - check out tsconfig.json to include / exclude files
 * files - only specific file will be compiled (advice for only smaller project)
 */

/**
 * es6 essentially allows let/const
 * target = es6
 * if target is set to es6, the default lib is
 *  "lib": [
 *    "DOM",
 *    "ES6",
 *    "DOM.Iterable",
 *    "ScriptHost"
 *  ]
 */

/**
 * sourceMap allows you to see typescript files in the browser's console
 * when debugging (in Sources tab). When compile it creates a .map file. It
 * is later than map by the browser.
 */

/**
 * "outDir" > Redirect output structure to the directory.
 * "rootDir" > Specify the root directory of input files. Use to control the output
 * "noEmitOnError" > avoid generating error TS file in the dist folder
 */

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("clicked");
});
