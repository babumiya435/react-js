import React from 'react';

class Arrow extends React.Component{
    constructor(){
        super();
        this.state={
            't':0,
            'l':0
        }
        this.fnMoveArrowLeft=this.fnMoveArrowLeft.bind(this);
        window.addEventListener('keyup',function(e){
            debugger;
            if(e.keyCode == 38){
                if(this.state.t==0){
                    return;
                }
                this.setState({
                    't':this.state.t-5
                })
            }

            if(e.keyCode == 40){
                if(this.state.t==500){
                    return;
                }
                this.setState({
                    't':this.state.t+5
                })
            }

            if(e.keyCode == 13){
                if(!this.props.bal){
                    alert('please select target bal');
                    return;
                }
                const {bal} =this.props; 
                const {t} = this.state;
                let tarBalLeft=bal.offsetLeft;
                let tarBalTop=bal.offsetTop;
                let tarBalHeight=bal.offsetHeight;
                if(t > tarBalTop && t <(tarBalTop+tarBalHeight)){
                    let targetLeft=tarBalLeft-100;
                this.fnMoveArrowLeft(targetLeft,true);
                    
                }else{
                    let targetLeft=400;
                this.fnMoveArrowLeft(targetLeft,false);
                    
                }
            }
        }.bind(this))
    }
    fnMoveArrowLeft(targetLeft,isHide){
        let interval=window.setInterval(()=>{
            this.setState({
                'l':this.state.l+1
            })
            if(this.state.l==targetLeft){
                clearInterval(interval);
                if(isHide){
                    this.props.bal.style.display='none';
                    this.props.clearTarget();
                }
                this.setState({
                    'l':0,
                    't':0
                })
               
            }
      },20);
    }
    render(){
        return <div className="arrow" style={{left:this.state.l,top:this.state.t}}></div>
    }
}

export default Arrow;