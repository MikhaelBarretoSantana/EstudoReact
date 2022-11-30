
import React from "react";
import "./botao.css"

const ButtonAddTasks = ({children, onClick}) => {
    return (
        <button className="botao" type="submit" onClick={onClick}> {children} </button>
    )
}

export default ButtonAddTasks
