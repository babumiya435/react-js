import { Component } from "react";

class LearningContent extends Component {
    render(){
        console.log(this.props.data)
        return (
            <div className="m-4 p-3 border border-grey-400 shadow">
                <h3 className="text-xl font-bold text-blue-600">
                   {this.props.data[0].title}
                </h3>
                <div className="m-4 p-3 border border-grey-400 shadow">
                    {this.props.data[0].description}
                </div>
                <div className="m-4 p-3 border border-grey-400 shadow">
                    {this.props.data[0].image}
                </div>
            </div>
        )
    }
}

export default LearningContent;