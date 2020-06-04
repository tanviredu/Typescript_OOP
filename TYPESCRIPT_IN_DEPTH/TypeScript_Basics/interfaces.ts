import {Category} from "./enums";

export interface Book {
    id:number;
    title:string;
    author:string;
    avilable:boolean;
    category:Category;
    pages?:number;
    // damagedLogger is a method
    // that print a consoleinformation
    markDamaged?:DamagedLogger;

}

export interface  DamagedLogger {
    // it willl be a method
    (reason:string):void;
}

export interface Person{
    name:string;
    email:string;
}

export interface author extends Person{
    numBookPublished:number;

}

export interface  Librarian extends Person{
    department:string;
    assistCustomer:(custName:string) =>void;

}

/*
    ADDIGN GENERIC INTERFACE
    ANY TYPE IS ACCEPTTED BY THE GENERIC CLASS
 */

export interface  Magazine {
    title:string;
    publisher:string;

}

