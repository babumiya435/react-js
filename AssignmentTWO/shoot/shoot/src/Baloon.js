import React from 'react';

class Baloon extends React.Component{

    render(){
        return <div onClick={this.fnBalClick.bind(this)} className="baloon" style={{width:this.props.s,height:this.props.s,left:this.props.l,top:this.props.t}}></div>
    }

    fnBalClick(e){
       let _ele=e.target;
       let activeBal=document.querySelector('.active-baloon');
       if(activeBal){
           activeBal.classList.remove('active-baloon');
       }
       _ele.classList.add('active-baloon');
       this.props.balInfo(_ele);
    }

}

export default Baloon;