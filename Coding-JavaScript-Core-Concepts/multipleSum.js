function sum(a){
    return function(b){
        return b ? sum(a+b) : a;
    }
}


const result = sum(1)(2)(3)(4)(5)();
console.log(result)