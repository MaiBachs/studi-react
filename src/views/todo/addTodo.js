import React from "react";
class addTodo extends React.Component{
    state={
        title: ""
    }

    handleInputAdd = (event)=>{
        return(
            this.setState(
                {
                    title: event.target.value
                }
            )
        )
    }

    render(){
        return(
            <div className="add-todo">
                    <input type="text" onChange={(event)=>{this.handleInputAdd(event)}}></input>
                    <button onClick={()=>{this.props.handleAddTodo(Number(this.props.id)+1+"",this.state.title)}}>add</button>
            </div>
        )
    }
}
export default addTodo