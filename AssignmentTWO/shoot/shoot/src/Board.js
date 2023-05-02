import React from 'react';
import Baloon from './Baloon';
import Arrow from './Arrow';
class Board extends React.Component{
    constructor(){
        super();
        this.state={
            'bal':null
        }
        this.fnGetTargetBal=this.fnGetTargetBal.bind(this);
    }
    render(){
        return <div className="board"><Arrow clearTarget={this.clearTarget.bind(this)} bal={this.state.bal}/> <Baloon s="25px" l="300px" t="150px" balInfo={this.fnGetTargetBal} /><Baloon s="70px" l="400px" t="300px" balInfo={this.fnGetTargetBal} /><Baloon s="50px" l="350px" t="400px" balInfo={this.fnGetTargetBal} /></div>
    }
    clearTarget(){
        this.setState({
            'bal':null
        })
    }
    fnGetTargetBal(bal){
        this.setState({
            'bal':bal
        })
    }
}

export default Board;