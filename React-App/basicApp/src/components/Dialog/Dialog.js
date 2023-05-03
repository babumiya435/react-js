import { Component } from "react";

class Dialog extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log("[Dialog.js] Constructor is calling");
    }
    static getDerivedStateFromProps(props,state){
        console.log("[Dialog.js] getDerivedStateFromProps is calling");
        return state;
    }
    
    render(){
        console.log("[Dialog.js] render is calling");
        return (
            <div>
                Dialog Data
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }

    componentDidMount(){
        console.log("[Dialog.js] componentDidMount is calling");
    }   
}

export default Dialog;