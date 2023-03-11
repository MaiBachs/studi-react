import React from "react";
import "./listTodo.scss"
import AddTodo from "./addTodo";

class listTodo extends React.Component{
    state = {
        listTodo : [
            {id: "1", title: "title1"},
            {id: "2", title: "title2"},
            {id: "3", title: "title3"}
        ]
    }

    handleAddTodo=(todo)=>{
        this.setState(
            {
                listTodo: [...this.state.listTodo, todo]
            }
        )
    }

    render(){
        return(
            <div className="contener">
                <div className="list-content">
                    <AddTodo handleAddTodo={this.handleAddTodo}/>
                    {this.state.listTodo != null && this.state.listTodo.length > 0 &&
                        this.state.listTodo.map((item, index) => {
                            return(
                                <div className="child-todo" key={item.id}>
                                    <span>Todo: {item.id}</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default listTodo