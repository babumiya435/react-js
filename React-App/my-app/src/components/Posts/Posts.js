import { Component } from "react";
import Singlepost from "../Singlepost/Singlepost";

class Posts extends Component {
    state = {
        post: [
            {
                title: "Post 1",
                description: "Post 1 Description"
            },
            {
                title: "Post 2",
                description: "Post 2 Description"
            }
        ],
        postTite : "List of Posts"
    }

    updateTitleHandler() {
        console.log(this);
        this.setState({
            postTite: "Modified Post Title Way 2"
        })
    }

    render(){
        // modifying state properties ising setState() method
        // setTimeout(()=>{
            // console.log("modified");
            // this.state.post[0].title = "Modified Post 1"; 
            // this.state.post[1].title = "Modified Post 2"; 
            // const posts = [...this.state.post];
            // posts[0].title = "Modified Post 1";  // wrong way of changing state data
            // posts[1].title = "Modified Post 2";
            // const postTitleM = [...this.state.postTite][0];
            // postTitleM[0] = "Modified Title";
            // this.setState({
            //     posts,
            //     postTite: "Modified Post Title Way 1",
            // })
            // this.setState({
            //     postTite: "Modified Post Title Way 2",
            // })
        // },3000)
        
        return (
            <div>
                <h2 className="text-2xl my-3">
                    {this.state.postTite}
                </h2>
                <div>
                    <button 
                        onClick={this.updateTitleHandler.bind(this)}
                        className="px-5 py-2 bg-red-500 rounded-3xl text-white">
                        Update Post Title
                    </button>
                </div>
                <hr/>
                <div className="flex my-3">
                    <Singlepost title = {this.state.post[0].title} description={this.state.post[0].description}/>
                    <Singlepost title = {this.state.post[1].title} description={this.state.post[1].description}/>
                </div>
            </div>
            
        )
    }
}

export default Posts;