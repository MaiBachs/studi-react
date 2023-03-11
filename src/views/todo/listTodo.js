import React from "react";
import "./listTodo.scss"

class listTodo extends React.Component{
    state = {
        listTodo : [
            {id: "1", title: "title1"},
            {id: "2", title: "title2"},
            {id: "3", title: "title3"}
        ]
    }

    handleList

    render(){
        return(
            <div className="contener">
                <div className="add-todo">
                    <input type="text"></input>
                    <button>add</button>
                </div>
                <div className="list-content">
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