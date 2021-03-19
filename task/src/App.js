

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
        for(var i = 0; i<= parseInt(this.state.increment); i++ ){
            if(this.state.increment[i]%3==0)
            {
                this.setState({
                    mulThree:[... this.state.mulThree]
                })
            }
        }
    }
    handleMultipleFive=()=>{
        for(var i = 0; i<=10; i++ ){
           
          const result = parseInt(this.state.increment)+1 * i
          this.setState({
            mulFive:[... this.state.mulFive]
        })

          // display the result

          console.log(`${this.state.increment} * ${i} = ${result}`);
      }
        
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
                <button onClick={()=>this.handleMultipleFive()+1}>Multiple 5</button>
                {this.state.mulFive.map((item,index)=><span key={index}>Multiple 5 : {item}</span>)}
                </div>
                <button onClick={()=>this.handleReset()}>Reset</button>
            </React.Fragment>
        )
    }
}
export default App;
