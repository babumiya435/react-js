document.querySelector("#cards-list")
.addEventListener("click",(e)=>{
    console.log(e.target.id)
    // window.location.href = "/"+e.target.id
},false)

document.querySelector("#inputs")
.addEventListener("keyup",(e)=>{
    console.log(e)
    if (e.target.dataset.uppercase !== undefined) {
        e.target.value = e.target.value.toUpperCase();
    }
},false)