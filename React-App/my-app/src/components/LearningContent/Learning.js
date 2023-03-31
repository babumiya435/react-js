import { Component } from "react";
import LearningContent from "./LearningContent";

class Learning extends Component {
    state = {
        data: [
            {
                id: 1,
                title: "Class based Components",
                description: "Class based components Description",
                image: "Class based components Image",
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