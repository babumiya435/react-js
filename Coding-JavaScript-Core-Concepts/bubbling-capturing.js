document.querySelector("#grandparent").addEventListener("click",(e)=>{
    console.log("Grand parent Clicked");
    // e.stopPropagation();
},false);
document.querySelector("#parent").addEventListener("click",(e)=>{
    console.log("Parent clicked");
    e.stopImmediatePropagation();
},false)
document.querySelector("#child").addEventListener("click",(e)=>{
    console.log("Child clicked");
    // e.stopPropagation();
},true)