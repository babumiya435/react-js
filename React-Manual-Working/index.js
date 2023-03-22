console.log("BASIC REACT APP");
let A = [-1,-3];
function solution(A) {
    // Implement your solution here
    A = [...(new Set(A))];
    A = A.sort((a,b)=> a-b);
    let n = A.length;
    if(n === 1){
        if(A[0] === 1){
            return 2;
        }else{
            return 1;
        }
    }
    let max = Math.max(...A);
    if(max <= 0) return 1;
    let res=1;
    for(var i = 0; i < n; i++){
        if(A[i] < 1){
            continue;
        }else {
            if(A[i-1] && A[i-1] < A[i]){
                res = A[i] + 1;
                if(A.indexOf(res) != -1){
                    continue
                }else{
                    return res;
                }
            }else {
                if(A[i] === 1){
                    continue
                }else{
                    return 1;
                }
            }
        }
    }
    return res;
}

console.log(solution(a));
function solution(A) {
    // Implement your solution here
    A = [...(new Set(A))];
    A = A.sort((a,b)=> a-b);
    let n = A.length;
    if(n === 1){
        if(A[0] === 1){
            return 2;
        }else{
            return 1;
        }
    }
    let max = Math.max(...A);
    if(max <= 0) return 1;
    let res=1;
    for(var i = 0; i < n; i++){
        if(A[i] < 1){
            continue;
        }else {
            if(A[i-1] && A[i-1] < A[i]){
                res = A[i] + 1;
                if(A.indexOf(res) != -1){
                    continue
                }else{
                    return res;
                }
            }else {
                if(A[i] === 1){
                    continue
                }else{
                    return 1;
                }
            }
        }
    }
    return res;
}
function a(){}
function solution(a) {
    console.log(typeof(a))
    // Implement your solution here
    A = [...(new Set(A))];
    A = A.sort((a,b)=> a-b);
    let n = A.length;
    if(n === 1){
        if(A[0] === 1){
            return 2;
        }else{
            return 1;
        }
    }
    let max = Math.max(...A);
    if(max <= 0) return 1;
    let res=1;
    for(var i = 0; i < n; i++){
        if(A[i] < 1){
            continue;
        }else {
            if(A[i-1] && A[i-1] < A[i]){
                res = A[i] + 1;
                if(A.indexOf(res) != -1){
                    continue
                }else{
                    return res;
                }
            }else {
                if(A[i] === 1){
                    continue
                }else{
                    return 1;
                }
            }
        }
    }
    return res;
}
let n = new Array(2);
console.log(typeof(n))

var foo =[];
for (let i = 0; i < 10; i++) {
    (function(){
        var y = i;
        foo[i] = function(){
            return y
        }
    })()
}
console.log(foo[2]())