// strings are heart of any development
let s = "I love Google ";

// console.log(findAllIndices(s,'o'));

function findAllIndices(str,ch){
    let i = 0;
    let count = 0;
    let places = [];
    if(str.indexOf(ch) !== -1){
        while(i !== -1){
            i = str.indexOf(ch,i);
            if(i !== -1){
                count++;
                places.push(i);
                i++;
            }
        }
    }
    return {count,places}
}
    
let i = 0;
let map={};
function longestWord(s){
    let t = "";
    let res = 0;
    for( let i = 0 ; i<s.length;i++){
        if(t.indexOf(s[i]) !== -1){
            t = s[i];
        }else{
            t = t + s[i];
            res = Math.max(res,t.length);
        }
    }
    return res;
}
console.log(longestWord("abcdab"))