"use strict";
/**
 * Splitting code into multiple files
 *
 * Namespaces & File Bundling
 *  - use namepsace code syntax to group code
 *  - per file or bundled compilation is possible (less imports to manage)
 */
/// <reference path="drag-drop-interfaces.ts"/>
/// <reference path="project-model.ts" />
/**
 * In tsconfig.json, set the outFile to "./dist/bundle.js" and module to "amd" instead of CommonJS
 */
/**
 * ES modules
 *
 * Alternative to namespace, we can use export / import (safer & more manageable)
 */
