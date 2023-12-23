import React from "react";
import '../App.css';

// const TodosComponent = (props) =>{
//     return (
//         <div className="card">
//             <h3 className="cardName">{props.post.title}</h3>
//         </div>
//     )
// }
// export default TodosComponent;

class TodosComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="card">
                <h3 className="cardName">{this.props.post.title}</h3>
            </div>
        )
    }
}
export default TodosComponent;