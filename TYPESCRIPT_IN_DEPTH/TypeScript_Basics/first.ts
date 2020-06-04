import {Category} from "./enums";
import {Book} from "./interfaces"
import {DamagedLogger} from "./interfaces";
import {author} from "./interfaces"
import {Librarian} from "./interfaces"

class LibraryManager{

     books:any
     numberofBooks:number;
     firstAvilable:string;


     // implement the book
    // we get the book list so book[]
    getAllBook():Book[]{
         this.books = [
            {id:1,title:"annodin",author:"humayon ahmead",avilable:true,category:Category.Fiction},
            {id:2,title:"A Frawell",author:"Ernest",avilable:false,category:Category.Fiction},
            {id:3,title:"I know the Cage bird sings",author:"Maya",avilable:true,category:Category.Poetry},
            {id:4,title:"its 3 pm lets kill some people",author:"Aaaron",avilable:true,category:Category.History},

        ];

        return this.books;
    }
    // setting default value
    LogFirstAvilable(book:any = this.getAllBook()):void{
        this.numberofBooks = book.length;
        this.firstAvilable = "";
        // you have to use of
        // insed of in

        for (var currentbook of book){
            //console.log(currentbook.title);
            // run some checks
            if(currentbook.avilable){
                this.firstAvilable = currentbook.title;
                break;
            }
        }

        console.log(this.firstAvilable);

    }

    getBookCategoryByTitle(categoryFilter:Category = Category.Fiction):Array<string>{
        console.log("Getting Books in Category "+Category[categoryFilter]);
        const allBooks = this.getAllBook();
        const filteredTitles:string[] = [];

        for(var currentbook of allBooks){
            if(currentbook.category === categoryFilter){
                filteredTitles.push(currentbook.title);
            }
        }
        return filteredTitles;

    }

    LogBookTitles(titles:string[]):void{
        for(let title of titles){
            console.log(title);
        }
    }

    PublicationMessage(year:number):string{
        return "date published "+year;
    }


    // implement a single book

    getBooksById(id:number):Book{
        const  allBooks = this.getAllBook();

        /*
            we can use the lambda  expression
            in c# in the Typescript
            you can use the labda function
            to query anu list of object

         */


        // it return a Book object

        return allBooks.filter(book => book.id ===id)[0];

    }

    createCustomerId(name:string,id:number):string{
        return name+id;

    }

    createCustomer(name:string,age?:number,city?:string){
        console.log('Creating customer' + name);
        if(age){
            console.log("Age "+age);
        }
        if(city){
            console.log("City" +city)
        }
    }

    Checkoutbooks(customer:string,...bookIDS:number[]):string[]{

        console.log("checking out books for "+customer);
        var booksCheckout:string[] = [];

        for(var id of bookIDS){
            var book =this.getBooksById(id);
            if(book.avilable){
                booksCheckout.push(book.title);
            }
        }
        return booksCheckout;
    }

    /*
    REMEMBER IN TYPE SCRIPT FOR METHOD OVERLOADING
    YOU FIRST GIVE THE  DEFINITION
    AND THEN JUST ONE IMPLEMENTATION
     */



    // this is the two overload
    //1)
    getTitles(author:string):string[];
    //2)
    getTitles(avilable:boolean):string[];




    // and this is the comon implmntation
    // that apply both of them
    getTitles(bookProperty:any):string[]{
        const allbooks = this.getAllBook();
        var title:string[] = [];
        //1)
        if(typeof bookProperty == 'string'){

            // this type the book property
            // is a author name

            for (var book of allbooks){
                if(book.author === bookProperty){
                    title.push(book.title);
                }
            }

        }
        else if(typeof  bookProperty == 'boolean'){
            // get books by aviliablity

            for(var book of allbooks){
                if(book.avilable == bookProperty){
                    title.push(book.title);
                }
            }
        }

        return title;
    }

    printBoook(book:Book):void{
        console.log(book.title + "By" + book.author);
    }
}









var lb:LibraryManager = new LibraryManager();
var books:any = lb.getAllBook();
lb.LogFirstAvilable(books);
var num:Category =Category.Fiction;
var alltitle:string[] = lb.getBookCategoryByTitle(num);
console.log(alltitle);
lb.LogBookTitles(alltitle);
console.log(lb.getBooksById(1));




// this can be applied too
var logdamage :DamagedLogger;
logdamage = (damage:string) =>{
    console.log("Damage Reported "+damage);
}

var favauthor:author = {
    email: "ornobtanvir.git@gmail.com",
    name: "Tanvir Rahman",
    numBookPublished: 100

}

var favLibrarian:Librarian = {
    assistCustomer(custName: string): void {
        console.log("Assisting "+custName);
    }, department: "EEE",
    email: "lb1@gmail.com",
    name: "Ornob Tanvir"

}