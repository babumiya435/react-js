// 1. Two Sum problem
let input = [1,1,1,2,2,2,2,2,4] ,sum = 8;
// bruteforce
// function twoSum(input,sum){
//     let n = input.length;
//     for(let i = 0 ; i < n; i++){
//         for(let j = i+1; j < n ; j++){
//             if(input[i] + input[j] == sum){
//                 return [true , [i,j],[input[i],input[j]],[n-i,n-j]];
//             }
//         }
//     }
//     return false;
// }
// function twoSum(input,sum){
//     let n = input.length;
//     let l = 0,r=n-1;
//     let s = 0;
//     while(l<r){
//         s = input[l]+input[r];
//         if(s === sum){
//             return [true,[l,r],[input[l],input[r]]];
//         }
//         if(s<sum){
//             l++;
//         }else if(s>sum){
//             r--;
//         }
//     }
//     return false;
// }
function twoSum(i){
    if(i>= input.length - 1){
        return false;
    }
    if(input[i] + input[i+1] === sum){
        return true;
    }
    return twoSum(i+1);
}
console.log(twoSum(0))
