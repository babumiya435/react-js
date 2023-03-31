// console.log(document.getElementById("searchInput"));

function getData(){
    // console.log("Fetching Data....");
}
throttling = function(fn,th){
    let flag = true;
    return function(...args){
        let context = this;
        if(flag){
            fn.apply(context,args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            },th)
        }
    }
}

betterThrottling = throttling(getData,1000);
betterThrottling();