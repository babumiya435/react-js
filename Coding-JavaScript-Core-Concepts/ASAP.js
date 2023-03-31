// 1. TWO SUM
function twoSum(ar,target){
    // for(let i = 0 ; i< ar.length ; i++){
    //     for(let j = i+1 ; j< ar.length ; j++){
    //         if(ar[i] + ar[j] === target){
    //             console.log(`found sum values ${ar[i]} + ${ar[j]} = ${ar[i]+ar[j]} and respective indices are `, {i,j});
    //             return;
    //         }
    //     }
    // }
    // for (let i = 0; i < ar.length; i++) {
    //     let x = ar.indexOf(target-ar[i]);
    //     if(x){
    //         console.log([i,x]);
    //         return ;
    //     }
    // }
    let hash = new Map();
    for(let i = 0 ; i<ar.length ; i++){
        if(hash.has(target-ar[i])){
            console.log([target-ar[i],ar[i]]);
            console.log([hash.get(target-ar[i]),i]);
            return;
        }else{
            hash.set(ar[i],i);
            console.log(hash)
        }
    }
    console.log("No match found");
    return;
}
function occurences(str){
    let count = 0;
    let first = str.indexOf("e");
    while(first !== -1){
        console.log(first);
        first = str.indexOf("e",first+1);
    }
}
let a = [2,7,11,5];
let t = 9;
// twoSum(a,t);

const str = 'To be, or not to be, that is the question.'
// occurences(str);
