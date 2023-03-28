import { Component } from "react";

class Singlepost extends Component {
    render(){
        return (
            <div>
                <div>
                   {this.props.title}
                </div>
                <div>
                    {this.props.description}
                </div>
            </div>
        )
    }
}

export default Singlepost;