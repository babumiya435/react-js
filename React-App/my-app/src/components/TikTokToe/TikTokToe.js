import { useState } from "react";
import SingleToe from "./SingleToe";

function TikTokToe() {
    const a = Array(3).fill("").map(x => Array(3).fill(""));
    const [toe, setToe] = useState(a);
    const [status, setStatus] = useState("");
    function handleClick(i, j) {
        const toes = [...toe];
        let state = "";
        if (!toes[i][j]) {
            if (!status) {
                setStatus("X");
                state = "X";
            } else {
                setStatus(status === "X" ? "O" : "X");
                state = status === "X" ? "O" : "X";
            }
            toes[i][j] = state;
            setToe(toes);
        }
    }
    const resetGame = ()=>{
        setStatus("");
        setToe(a);
    }
    const createStructure = () => {
        let mainPost = [];
        for (let i = 0; i < a.length; i++) {
            let posts = [];
            for (let j = 0; j < a.length; j++) {
                posts.push(<SingleToe id={`${i}${j}`} key={`${i}${j}`} tickTock={handleClick.bind(this, i, j)} toe={toe[i][j]} />)
            }
            mainPost.push(
                <div key={`${i}`} className="flex">
                    {posts}
                </div>
            )
        }
        return mainPost;
    }
    return (
        <>  
            <div className="m-4 p-3 border border-black-800  bg-red-500 shadow w-fit text-white">
                Tik Tok Toe Game:
            </div>
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
            <div>
                <button onClick={resetGame} type="reset" className="px-5 py-2 bg-red-500 rounded-3xl text-white">
                    Reset
                </button>
            </div>
        </>

    )
}

export default TikTokToe;