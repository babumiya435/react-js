import { useState } from "react";
import SingleToe from "./SingleToe";

function TikTokToe (){
    const a = Array(3).fill("").map(x => Array(3).fill(""))
    const [toe,setToe] = useState(a);
    const [status,setStatus] = useState("");
    function tickTock(){
        if(!toe){ setToe(handleClick);}
        if (toe === "X") {
            setToe("O");
        } else if(toe === "O"){
            setToe("X");
        }
    }
    function handleClick(i,j){
        const toes = [...toe];
        if(!toes[i][j]) {
            if(!status){
                setStatus("X");
            } else {
                setStatus(status === "X" ? "O" : "X");
            }
            toes[i][j] = status;
            setToe(toes);
        }
    }
    let createStructure = ()=>{
        let mainPost = [];
        for(let i = 0; i < a.length; i++){
            let posts = [];
            for(let j = 0; j < a.length; j++){
                posts.push(<SingleToe id = {`${i}${j}`} key = {`${i}${j}`} tickTock = {handleClick.bind(this,i,j)} toe = {toe[i][j]}/>)
            }
            mainPost.push(
                <div key = {`${i}`} className="flex">
                    {posts}
                </div>
            )
        }
        return mainPost;
    }
    return (
        <div className="m-4 p-3 border border-grey-400 shadow w-fit">
            {/* <div className="flex">
                <div onClick={tickTock} className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
            </div>
            <div className="flex">
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
            </div>
            <div className="flex">
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
                <div className="m-4 p-3 border border-grey-400 shadow text-xl font-bold text-blue-600">{toe}</div>
            </div> */}
            <div>
                {createStructure()}
            </div>
        </div>
    )
}

export default TikTokToe;