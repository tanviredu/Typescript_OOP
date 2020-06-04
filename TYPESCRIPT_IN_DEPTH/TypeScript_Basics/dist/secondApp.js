import { Utility } from "./utilityClass";
import { Shelf } from "./shelf";
import { Category } from "./enums";
var fees = Utility.fees.calculateLateFee(10);
console.log(fees);
var inventory = [
    { id: 1, title: "annodin", author: "humayon ahmead", avilable: true, category: Category.Fiction },
    { id: 2, title: "A Frawell", author: "Ernest", avilable: false, category: Category.Fiction },
    { id: 3, title: "I know the Cage bird sings", author: "Maya", avilable: true, category: Category.Poetry },
    { id: 4, title: "its 3 pm lets kill some people", author: "Aaaron", avilable: true, category: Category.History },
];
var maginventory = [
    { title: "annodin", publisher: "tanvir" },
    { title: "A Frawell", publisher: "humayan" },
    { title: "I know the Cage bird sings", publisher: "jk rowling" },
    { title: "its 3 pm lets kill some people", publisher: "hugo" },
];
var bookshelf = new Shelf();
inventory.forEach(function (book) { return bookshelf.add(book); });
var firstbook;
firstbook = bookshelf.getFirst();
console.log(firstbook.title);
var magshelf = new Shelf();
maginventory.forEach(function (mag) { return magshelf.add(mag); });
var firstmag;
firstmag = magshelf.getFirst();
console.log(firstmag.title);
//# sourceMappingURL=secondApp.js.map