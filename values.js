"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var novel = [
    { id: undefined, title: 'Book 1', author: 'Author 1' },
    { id: undefined, title: 'Book 2', author: 'Author 2' },
    { id: undefined, title: 'Book 3', author: 'Author 3' },
];
for (var _i = 0, novel_1 = novel; _i < novel_1.length; _i++) {
    var books = novel_1[_i];
    console.log("Title: ".concat(books.title, ", Author: ").concat(books.author));
}
