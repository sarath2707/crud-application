"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var BookApp_1 = require("./BookApp");
// Create an instance of the BookApp class and run the application
var app = new BookApp_1.BookApp();
exports.app = app;
app.run();
