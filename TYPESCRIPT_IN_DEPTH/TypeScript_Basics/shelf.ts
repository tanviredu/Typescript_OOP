

/*
    ONE LIBRARY MAY HAVE DIFFERENT SHELF
    WITH DIFFERENT KINDS OF THINGS LIKE
    BOOK MAGAZINE SO WE USE GENERIC CLASS
    TO ACCEPT ALL OG IT
    WHEN YOU CALL IT WITH STRING
    T WILL BE STRING TYPE
    YOU CALL WITH NUMBER
    OR ANY OBJECT IT WILL BE THAT TYPE
 */


export class Shelf<T>{
    private _items:Array<T> = new Array<T>();// generic array

    add(item:T):void{
        this._items.push(item);
    }
    getFirst():T{
        return this._items[0];
    }
}