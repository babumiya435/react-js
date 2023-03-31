let counter = 0;
function getData(status){
    // console.log("Fetch Data....." + " " + status + " --> " + counter++);
}
const debounce = function(fn,d){
    let timer;
    return function(...args){
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(context,args);
        },d)
    }
}
betterDebounce = debounce(getData,300);
betterDebounce("Yes");