"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BookStore_1 = __importDefault(require("./BookStore"));
const NotificationService_1 = __importDefault(require("./NotificationService"));
const bookStore = new BookStore_1.default();
const notificationService = new NotificationService_1.default();
bookStore.on("bookOrder", (bookName) => {
    notificationService.sendNotification(bookName);
});
bookStore.orderBook("Node.js Guide");
bookStore.displayorderCount();
