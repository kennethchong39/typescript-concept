"use strict";
/**
 * to compile ts file - use `tsc file.ts`
 */
/**
 * to use watch mode - use `tsc file.ts --watch`
 */
/**
 * to compile entire project - use `tsc`
 */
/**
 * including & excluding files - check out tsconfig.json to include / exclude files
 */
/**
 * soureMap allows you to see ts files in the browser's console when debugging (in Sources tab). when compile it creates a .map file. It is later than map by the browser.
 */
/**
 * "outDir" > Redirect output structure to the directory.
 * "rootDir" > Specify the root directory of input files. Use to control the output
 */
const button = document.querySelector("button");
button.addEventListener("click", () => {
    console.log("clicked");
});
