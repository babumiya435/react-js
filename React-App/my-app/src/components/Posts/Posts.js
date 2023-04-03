import { Component } from "react";
import Singlepost from "../Singlepost/Singlepost";

class Posts extends Component {
    state = {
        posts: [
            {
                id: 1,
                title: "Post 1",
                description: "Post 1 Description"
            },
            {
                id: 2,
                title: "Post 2",
                description: "Post 2 Description"
            },
            {
                id: 3,
                title: "Post 3",
                description: "Post 3 Description"
            }
        ],
        postTite : "List of Posts",
        showposts : true,
        count : 0
    }
// --------------------------------------------Handling Events-----------------------------
    updateTitleHandler(title,e) {
        e.preventDefault();
        console.log(this);
        this.setState({
            postTite: title // need to pass the object contect while calling the function
        })
    }
    updateArrow = (title,e)=> {
        e.preventDefault();
        console.log(this);
        this.setState({
            postTite: title // using arrow function syntax to avoid this confusion
        })
    }
    togglePost = ()=>{
        this.setState({
            showposts: !this.state.showposts
        })
    }
    getPosts(){
        if(!this.state.showposts) return null;
        // using map method
        // let posts = this.state.posts.map((post) => (<Singlepost key={post.id} title={post.title} description={post.description} />));
        let posts = [];
        // using for loop
        for(let post of this.state.posts){
            posts.push(
                <Singlepost key={post.id} title={post.title} description={post.description} />
            )
        }
        return (<div className="flex my-5">
           {posts}
        </div>)
    }

    render(){
        // modifying state properties ising setState() method
        // setTimeout(()=>{
            // console.log("modified");
            // this.state.posts[0].title = "Modified Post 1"; 
            // this.state.posts[1].title = "Modified Post 2"; 
            // const posts = [...this.state.posts];
            // posts[0].title = "Modified Post 1";  // wrong way of changing state data
            // posts[1].title = "Modified Post 2";
            // const postTitleM = [...this.state.postTite][0];
            // postTitleM[0] = "Modified Title";
            // this.setState({
            //     posts,
            //     postTite: "Modified Post Title Way 1",
            // })
            // this.setState({
            //     postTite: "Modified Post Title Way 1",
            // })
        // },3000)
        let posts = null;
        if (this.state.showposts) {
            posts = (
                <div className="flex my-3">
                    <Singlepost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                    <Singlepost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>
            )
        }
        return (
            <div>
                <div>
                    {this.state.count !==0 && "Show Count"}
                </div>
                <h2 className="text-2xl my-3">
                    {this.state.postTite}
                </h2>
                {/* this is the best way */}
                <div>
                    <button 
                        onClick={this.updateTitleHandler.bind(this,"title update 2")}
                        className="px-5 py-2 bg-red-500 rounded-3xl text-white">
                        class method
                    </button>
                    <button 
                        onClick={this.updateArrow.bind(this,"title update 3")}
                        className="px-5 py-2 bg-red-500 rounded-3xl text-white">
                        arrow method
                    </button>
                {/* this is the best way */}
                {/* call back is not recommended way because it can have side effects when we pass this component to child */}
                    {/* <a 
                        href="https://google.com" 
                        onClick={(e)=> this.updateArrow(e,"test 3")}
                        className="px-5 py-2 bg-red-500 rounded-3xl text-white">
                        anchor with property
                    </a>
                    <a 
                        href="https://google.com" 
                        onClick={(e)=> this.updateTitleHandler(e,"test 2")}
                        className="px-5 py-2 bg-red-500 rounded-3xl text-white">
                        anchor bind
                    </a> */}
                {/* not recommended way because it can have side effects when we pass this component to child */}
                </div>
                <hr/>
                <div>
                    {/* ternary operator conditioning */}
                    <button onClick={this.togglePost} className="px-5 py-3 bg-red-500 text-white">
                        {this.state.showposts ? "Hide Posts" : "Show Posts"}
                    </button>
                </div>
                {/* JSX conditional rendering inside render function before return*/}
                {false && posts} 
                {/* ternary operator conditioning */}
                {false && this.state.showposts ?
                    (<div className="flex my-3">
                        <Singlepost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                        <Singlepost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                    </div>) : null
                }
                {/* AND && operator conditioning */}
                {false && this.state.showposts && (<div className="flex my-3">
                        <Singlepost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                        <Singlepost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                    </div>)}
                {/* gettign data or JSX as function return */}
                {this.getPosts()}
            </div>
            
        )
    }
}

export default Posts;