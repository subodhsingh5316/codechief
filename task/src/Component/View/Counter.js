import React,{Component} from 'react'



class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            increment:0,
            mulThree:[],
            mulFive:[]
        }
    }
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
            if(this.state.increment[i]%3===0)
            {
                this.setState({
                    mulThree:[... this.state.mulThree, i]
                })
            }
        }
    }
    handleMultipleFive=()=>{
        for(var i = 0; i<= parseInt(this.state.increment); i++ ){
            if(this.state.increment[i]%5===0)
            {
                this.setState({
                    mulFive:[... this.state.mulThree, i]
                })
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <div>
                <button onClick={this.handleInc()}>incrment </button>
                <p>{this.state.increment}</p>
                </div>
                <div>
                <button onClick={()=>this.handleMultipleThree()}>Multiple 3</button>
                {this.state.mulThree.map((item,index)=><span key={index}>Multiple 3 : {item}</span>)}
                </div>
                <div>
                <button onClick={()=>this.handleMultipleFive()}>Multiple 5</button>
                {this.state.mulFive.map((item,index)=><span key={index}>Multiple 5 : {item}</span>)}
                </div>
                <button onClick={this.handleReset()}>Reset</button>
            </React.Fragment>
        )
    }
}
  export default Counter;