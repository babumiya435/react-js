import { Component } from "react";
import LearningContent from "./LearningContent";

class Learning extends Component {
    state = {
        data: [
            {
                id: 1,
                title: "Class based components",
                description: "Class based components description",
                image: "Class based components image",
            }
        ]
    }
    
    render() {
        return (
            <div className='container mx-auto'>
                <LearningContent data={this.state.data} />
            </div>
        )
    }
}

export default Learning;