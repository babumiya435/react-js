function SingleToe(props){
    return (
        <button id = {props.id} key = {props.id} onClick={props.tickTock} className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600 w-12 h-12">{props.toe}</button>
    )
}

export default SingleToe;