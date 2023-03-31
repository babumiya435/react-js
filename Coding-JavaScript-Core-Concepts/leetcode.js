let twoSum = function(num, target) {
    for(let i = 0 ; i<num.length-1 ; i++){
        for(j = i+1 ;j<num.length;j++){
            if(num[i]+num[j]===target){
                return [i,j]
            }
        }
    }
};
function twoSum2(array, target) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
        const diffIndex = array.indexOf(target - array[i]);
        if (diffIndfIndex >= 0 && diffIndex !== i) {
            indices.push([i,difex]);
        }
    }
    return indices;
    // return []; // no solution found
}
nums = [2,7,11,15,4,1], target = 9
// nums = [3,2,4], target = 6
// nums = [3,3], target = 6
console.log(twoSum2(nums,target));