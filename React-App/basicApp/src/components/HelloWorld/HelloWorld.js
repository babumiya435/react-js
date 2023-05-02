import { Component } from "react";


class HelloWorld extends Component {
    render(){
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

export default HelloWorld;