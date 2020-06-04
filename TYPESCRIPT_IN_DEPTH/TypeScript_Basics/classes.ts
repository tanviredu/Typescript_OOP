import {Person} from "./interfaces";
import {Librarian} from "./interfaces"
import {author} from "./interfaces";


// wen you import a interface
// you need to import the dependent one too
class UniversityLibrarian implements Librarian{
    assistCustomer(custName: string): void {
        // add the method here
        console.log(this.name+" is assisting "+custName);
    }

    department: string;
    email: string;
    name: string;

}

/*
 YOU CAN INSTANTIATE A ABSTRACT CLASS
 YOU CAN ONLY INSTANTITE THE DERIVED CLASS
 UNLIKE THE INTERFACE YOU CAN WRITE
 SOME IMPLMEMTATION IN IT
 */

abstract class ReferenceItem{
    // this abstract class
    // will hep to find the information about
    // from from given book and year

    /*
       ABSTRATC IS LIKE INTERFFACE
       BUT YOU CAN PROVIDE SOME INFORMATION TOO
     */

    private _publisher:string;
    static department:string = "Research";

    constructor(public title:string,public year:number) {
        console.log("Creating a new Refrance ...");

    }
    printItem():void{
        console.log(this.title+ " has published "+this.year);

        // this is static
        console.log(" The department is "+ReferenceItem.department);
    }

    get publisher():string{
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher:string){
        this._publisher = newPublisher;
    }

    abstract printCitation():void;
}


class Encyclopedia extends ReferenceItem{
    constructor(newTitle:string,newYear:number,public edition:number) {
        super(newTitle,newYear);
    }

    printItem() {
        super.printItem();
        console.log("Edition" + this.edition +" "+ this.year);
    }

    printCitation(): void {
        console.log("print citation");
    }
}

