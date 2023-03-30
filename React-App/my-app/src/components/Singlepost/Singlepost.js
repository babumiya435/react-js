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
            </div>
        )
    }
}

export default Singlepost;