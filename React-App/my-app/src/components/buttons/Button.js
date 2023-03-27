// function Button(props){
//     return (
//         <div>
//             <button>{props.name}</button>
//         </div> 
//     )
// }

const Button1 = ({name})=>{
    name = "test"; // llocal variable can be changed but props cannot be changed
    return (
        <div>
            <button>{name}</button>
        </div> 
    )
}

export default Button1;