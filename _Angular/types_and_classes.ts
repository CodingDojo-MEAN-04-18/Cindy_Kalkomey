var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: number[] = [1,2,3,4];
var myObj: any = { name:'Bill'};
myObj = { x: 5, y: 10 };

var anythingVariable: any = "Hey";
anythingVariable = 25;

var arrayOne: Array<boolean> = [true, false, true, true]; 
var arrayTwo: Array<any> = [1, 'abc', true, 2];


// object constructor
// MyNode = (function () {
//     function MyNode(val) {
//         this.val = 0;
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());

class MyNode {
    val: number;
    _priv: number;

    constructor(valueIn: number){
        this.val = valueIn;
    }
    doSomething() {
        this._priv = 10;
    }
}

let myNodeInstance = new MyNode(1);

console.log(myNodeInstance.val);

function myFunction(val: string  = "Hello World"): void {
    console.log(val);
    return;
} 

function sendingErrors(message: string = 'Error message'): never {
	throw new Error(message);
}