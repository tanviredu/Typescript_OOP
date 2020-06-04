export namespace Utility{

    export namespace fees{
        export function calculateLateFee(daysLate:number){
            return daysLate*.25;
        }
    }
    export function MaxBooksAllowed(age:number):number{
        if(age<12){
            return 3;

        }else{
            return 10;
        }
    }


    /*
    WHATEVER TYPE IN DENOTED AFTER THE FUNCTIOM
    THE INPUT TYPE HAVE TO BE THE SAME PURGE<T>
    AND inventory:Array<T>

     */

    function Purge<T>(inventory:Array<T>):Array<T>{
        return inventory.splice(2,inventory.length);
    }

}