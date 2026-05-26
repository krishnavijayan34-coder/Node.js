"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
//extending eventemitter
class Bookstore extends events_1.default {
    constructor() {
        super();
        this.orderCount = 0;
    }
    orderBook(bookName) {
        this.orderCount++;
        console.log(`Book Ordered:${bookName}`);
        this.emit("bookOrder", bookName);
    }
    displayorderCount() {
        console.log(`Total Orders:${this.orderCount}`);
    }
}
exports.default = Bookstore;
