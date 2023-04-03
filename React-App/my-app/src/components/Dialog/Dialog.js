import { Component } from "react";

class Dialog extends Component {
    render(){
        return (
            <div>
                Dialog Data
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Dialog;