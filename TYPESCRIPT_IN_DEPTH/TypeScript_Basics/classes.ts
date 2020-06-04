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