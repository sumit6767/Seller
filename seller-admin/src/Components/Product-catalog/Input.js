import React from "react";

const Input = (props)=>{
    return(
        <div className={props.className}>
            <label htmlFor={props.label}>{props.name}</label>
            <input id={props.id} type={props.type} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input