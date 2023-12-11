import React from "react";
import '../App.css';

const TodosComponent = (props) =>{
    return (
        <div className="card">
            <h3 className="cardName">{props.todo.title}</h3>
        </div>
    )
}
export default TodosComponent;