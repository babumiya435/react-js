import { Component } from "react";

class AddPost extends Component {
    state = {
        title : "",
        description : "",
        status : "active",
    }

    // Controlled Component
    addPostHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    textChange = (title,e)=>{
        this.setState({
            [title] : e.target.value,
        })
    }
    // textChange(title,e){
    //     this.setState({
    //         [title] : e.target.value,
    //     })
    // }
    render(){
        return (
            <div>
                <h2 className="text-2xl font-bold">
                    Add Post
                </h2>
                <form onSubmit={this.addPostHandler}>
                    <div className="my-3">
                        <label className="block">
                            Title
                        </label>
                        <input onChange={this.textChange.bind(this,"title")} type="text" value={this.state.title} className="px-3 py-1 block w-1/4 border border-grey-600 focus:outline-none focus:border-red-600"/>
                    </div>
                    <div className="my-3">
                        <label className="block">
                            Description
                        </label>
                       <textarea onChange={this.textChange.bind(this,"description")} value={this.state.description} className="px-3 py-1 block w-1/4 border border-grey-600 focus:outline-none focus:border-red-600">

                       </textarea>
                    </div>
                    <div className="my-3">
                        <label className="block">
                            Status
                        </label>
                        <select onChange={this.textChange.bind(this,"status")} value={this.state.status} className="px-3 py-1 block w-1/4 border border-grey-600 focus:outline-none focus:border-red-600">
                            <option value='active'>
                                Active
                            </option>
                            <option value='inactive'>
                                In Active
                            </option>
                        </select>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="bg-indigo-900 text-white px-5 py-2">
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddPost;