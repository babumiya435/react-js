import { Component } from "react";
import Singlepost from "../Singlepost/Singlepost";

class Posts extends Component {
    render(){
        return (
            <div>
                <Singlepost title = "Post 1" description="Post 1 Description"/>
                <Singlepost title = "Post 2" description="Post 2 Description"/>
            </div>
        )
    }
}

export default Posts;