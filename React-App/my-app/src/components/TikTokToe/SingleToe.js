function SingleToe(props){
    return (
        <button id = {props.id} key = {props.id} onClick={props.tickTock} className=" p-2 px-5 py-2 border border-grey-400 shadow text-xl font-bold text-blue-600 w-12 h-12">{props.toe}</button>
    )
}

export default SingleToe;