import EventEmitter from "events"

//extending eventemitter
class Bookstore extends EventEmitter {
    private orderCount:number;

    constructor() {
        super();
        this.orderCount=0;
    }
    orderBook(bookName: string): void {
        this.orderCount++;
        console.log(`Book Ordered:${bookName}`);
        this.emit("bookOrder",bookName);
    }
    displayorderCount():void {
        console.log(`Total Orders:${this.orderCount}`);
    }
}
export default Bookstore;