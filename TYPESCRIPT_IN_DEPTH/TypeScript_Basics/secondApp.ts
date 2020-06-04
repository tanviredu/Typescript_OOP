/// <reference path='utilityCLass.ts' />
import {Utility} from "./utilityClass";

var fees:number = Utility.fees.calculateLateFee(10);
console.log(fees);