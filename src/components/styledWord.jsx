import React from "react";
import { useParams } from "react-router-dom";

const StyledWord = () => {
    const {word, fontColor, backgroundColor} = useParams();

    const componentStyle = {
        color: fontColor,
        backgroundColor: backgroundColor
    }
    if (isNaN(word) && isNaN(fontColor) && isNaN(backgroundColor)) {
        return (
            <div>
                <h1 style={componentStyle}>The word is: {word}</h1>
            </div>
        )
    }else {
        return (
            <div>
                <h1>Invalid Input, not a valid word or color</h1>
            </div>
        )
    }
}

export default StyledWord;