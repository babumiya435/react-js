import { Component } from "react";

class Singlepost extends Component {
    render(){
        return (
            <div className="m-4 p-3 border border-grey-400 shadow">
                <h3 className="text-xl font-bold text-blue-600">
                   {this.props.title}
                </h3>
                <div>
                    {this.props.description}
                </div>
                {/* <div className="my-2">
                    <input type='text'
                        value={this.props.title}
                        onChange = {this.props.titleChange}
                        className="px-5 py-1 rounded-xl border border-grey-500" />
                </div> */}
                <div className="my-2">
                    {this.props.children}
                </div>
                <div className="my-2">
                    {this.props.addPost}
                </div>
            </div>
        )
    }
}

export default Singlepost;