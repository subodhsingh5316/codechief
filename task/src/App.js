

import React, { Component } from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            increment:0,
            mulThree:[],
            mulFive:[]
        }
    }
    decrement=() =>{
      this.setState({
        increment: parseInt(this.state.increment)-1,
      });
    };
  
   
    handleInc = ()=>{
        this.setState({
            increment: parseInt(this.state.increment)+1,
        })
    }
    handleReset = ()=>{
        this.setState({
            increment: 0,
        })
    }
    handleMultipleThree=()=>{
        var arr=[]
        for(var i = 0; i<= parseInt(this.state.increment); i++ ){
            if(i%3===0)
            {  
             arr.push(i)
              // this.state.mulThree.push(i)
              //   console.log(this.state.mulThree)
            }
        }
        console.log(arr)
        this.setState({
            mulThree: arr
          })
        
    }
    handleMultipleFive=()=>{
        var arr=[]
        for(var i = 0; i<= parseInt(this.state.increment); i++ ){
            if(i%5===0)
            {  
             arr.push(i)
              // this.state.mulThree.push(i)
              //   console.log(this.state.mulThree)
            }
        }
        console.log(arr)
        this.setState({
            mulFive: arr
          })
   
      }
    render(){
        return(
            <React.Fragment>
                <div>
                <button onClick={()=>this.handleInc()}>incrment </button>
                <p>{this.state.increment}</p>
                </div>
                <button className='dec' onClick={(e) => this.decrement(e)}>Decrement!</button>
  
                <div>
                <button onClick={()=>this.handleMultipleThree()}>Multiple 3</button>
                {this.state.mulThree.map((item,index)=><span key={index}>Multiple 3 : {item}</span>)}
                </div>
                <div>
                <button onClick={()=>this.handleMultipleFive()}>Multiple 5</button>
                {this.state.mulFive.map((item,index)=><span key={index}>Multiple 5 : {item}</span>)}
                </div>
                <button onClick={()=>this.handleReset()}>Reset</button>
            </React.Fragment>
        )
    }
}
export default App;
