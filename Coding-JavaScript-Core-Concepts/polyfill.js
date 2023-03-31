console.log("---------------------------'START'-----------------------------");
let a = 5;
let b = "Test";
let c = [1];
let d = false;
// console.log(a.__proto__.__proto__)
let obj = {
    fname : "Sameer",
    lname : "Mohammad",
}
let obj1 = {
    city : "Texas"
}
obj1.__proto__ = obj;  //prototypical inheritance
// console.log(obj1.fname);
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__);
// console.log(obj.__proto__.__proto__.__proto__);  // null.__proto__ = error
function printName(){
    console.log(this.fname + " " + this.lname)
}
Function.prototype.myBind = function(...args){
    let context = this,
    params = args.slice(1);
    return function(...args2){
        context.apply(args[0],[...params,...args2])
    }
}
Function.prototype.myApply = function(...args){
    let context = this,
    params = args[1];
    context.apply(args[0],params);
}
Function.prototype.myCall = function(...args){
    let obj = args[0],
    params = args.slice(1);
    obj[this.name] = this;
    obj[this.name](params);
    delete obj[this.name];
}
printName.myCall(obj);
printName.myBind(obj)();
printName.myApply(obj);























console.log("---------------------------'END'-----------------------------");
