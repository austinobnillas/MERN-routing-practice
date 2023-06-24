import React from "react";
import { useParams } from "react-router-dom";

const Display = (props) => {
    const {input} = useParams();
    
    if (isNaN(input)) {
        return (
        <div>
            <h1>The word is: {input}</h1>
        </div>
        )
    }else {
        return (
            <div>
                <h1>The number is: {input}</h1>
            </div>
        )
    }
    // return (
    //     <div>
    //         <h1>The Number is: {number}</h1>
    //     </div>
    // )
}

export default Display;