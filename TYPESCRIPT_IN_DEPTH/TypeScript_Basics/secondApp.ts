/// <reference path='utilityCLass.ts' />
import {Utility} from "./utilityClass";
import {Shelf} from "./shelf"
import {Book, Magazine} from "./interfaces";
import {Category} from "./enums";

var fees:number = Utility.fees.calculateLateFee(10);
console.log(fees);
var inventory:Array<Book> = [
        {id:1,title:"annodin",author:"humayon ahmead",avilable:true,category:Category.Fiction},
        {id:2,title:"A Frawell",author:"Ernest",avilable:false,category:Category.Fiction},
        {id:3,title:"I know the Cage bird sings",author:"Maya",avilable:true,category:Category.Poetry},
        {id:4,title:"its 3 pm lets kill some people",author:"Aaaron",avilable:true,category:Category.History},

    ];


var maginventory:Array<Magazine> = [
    {title:"annodin",publisher:"tanvir"},
    {title:"A Frawell",publisher:"humayan"},
    {title:"I know the Cage bird sings",publisher:"jk rowling"},
    {title:"its 3 pm lets kill some people",publisher:"hugo"},

];








/*
    WE USE THE GENERIC SHELF FOR THE BOOK
    SO WE USE BOOK AS A TYPE

 */


var bookshelf = new Shelf<Book>();
/*
        LOOP THROUGH THE INVENTORY
        AND AD TO THE SHELF
        USING FOREACH LOOP AND USING LANBDA FUNCTION
        WE ADDED TO THE SHELF
 */



inventory.forEach(book =>bookshelf.add(book));
// make  a book type variable
var firstbook:Book;
firstbook = bookshelf.getFirst();

console.log(firstbook.title);





var magshelf = new Shelf<Magazine>();
/*
        LOOP THROUGH THE INVENTORY
        AND AD TO THE SHELF
        USING FOREACH LOOP AND USING LANBDA FUNCTION
        WE ADDED TO THE SHELF
 */



maginventory.forEach(mag =>magshelf.add(mag));
// make  a book type variable
var firstmag:Magazine;
firstmag = magshelf.getFirst();

console.log(firstmag.title);








