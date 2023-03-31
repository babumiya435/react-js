function mult(a,b){
    console.log(a*b)
}
// mul(2,5);
// using bind method
const mulBy2 = mult.bind(this,2);
mulBy2(5)
// const mulBy5 = mul.bind(null,5);
// mulBy5(5)

// using closures

function mul(a){
    return function(b){
        console.log(a*b);
    }
}
const m2 = mul(2)
console.log(m2.toString())