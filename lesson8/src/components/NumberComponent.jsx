import {memo} from "react";


const NumberComponent = memo((props) =>{
    console.log("render NumberComponent");
    const {addNum, number} = props;
    return (
        <div>
            <button onClick={addNum}>Add</button>
            <h4>{number}</h4>
        </div>
    )
})
export default NumberComponent;