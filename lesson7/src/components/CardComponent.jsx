import React from "react";
import '../App.css';

// const CardComponent = (props) =>{
//     return (
//         <div className="card">
//             <h3 className="cardName">{props.comment.name}</h3>
//             <button className="btn" onClick={()=>props.setCurPost(props.comment.postId)}>{props.comment.postId}</button>
//             <h5 className="cardEmail">{props.comment.email}</h5>
//         </div>
//     )
// }
// export default CardComponent;

class CardComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card">
                <h3 className="cardName">{this.props.comment.name}</h3>
                <h5 className="cardEmail">{this.props.comment.email}</h5>
            </div>
        )
    }

}
export default CardComponent;