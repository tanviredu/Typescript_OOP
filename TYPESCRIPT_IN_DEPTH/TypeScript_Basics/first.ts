
enum Category{
    // it will assign number
    // to each category
   BioGraphy,
   Poetry,
   Fiction,
   History,
   Children

}

class LibraryManager{

     books:any
     numberofBooks:number;
     firstAvilable:string;


    getAllBook():any{
         this.books = [
            {title:"annodin",author:"humayon ahmead",avilable:true,category:Category.Fiction},
            {title:"A Frawell",author:"Ernest",avilable:false,category:Category.Fiction},
            {title:"I know the Cage bird sings",author:"Maya",avilable:true,category:Category.Poetry},
            {title:"its 3 pm lets kill some people",author:"Aaaron",avilable:true,category:Category.History},

        ];

        return this.books;
    }

    LogFirstAvilable(book:any):void{
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

    getBookCategoryByTitle(categoryFilter:Category):Array<string>{
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


    }



var lb:LibraryManager = new LibraryManager();
var books:any = lb.getAllBook();
lb.LogFirstAvilable(books);
var num:Category =Category.Fiction;
var alltitle:string[] = lb.getBookCategoryByTitle(num);
console.log(alltitle);
lb.LogBookTitles(alltitle);



