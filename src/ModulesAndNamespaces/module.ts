/**
 * Splitting code into multiple files
 *
 * Namespaces & File Bundling
 *  - use namepsace code syntax to group code
 *  - per file or bundled compilation is possible (less imports to manage)
 */

// ********** working with namespace
/**
 * check out drag-drop-interface and the import using the line below
 */
/// <reference path="drag-drop-interfaces.ts"/>
/// <reference path="project-model.ts" />

namespace App {
  // all your codes
  // this will be able to use the drag-drop-interfaces as imports within this file since it uses the same namespace
}

/**
 * In tsconfig.json, set the outFile to "./dist/bundle.js" and module to "amd" instead of CommonJS
 */

