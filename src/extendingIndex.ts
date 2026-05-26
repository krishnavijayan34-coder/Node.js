import Bookstore from "./BookStore";
import NotificationService from "./NotificationService";

const bookStore=new Bookstore();
const notificationService=new NotificationService();
bookStore.on("bookOrder",(bookName: string):void=> {
    notificationService.sendNotification(bookName);
});

bookStore.orderBook("Node.js Guide");
bookStore.displayorderCount();