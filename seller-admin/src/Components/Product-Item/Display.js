import React from "react";
import Auth from "../Context/Auth";
import './Display.css'
import style from '../Product-catalog/Classes.module.css'

export default function Display(props){
    
    return(
        <Auth.Consumer>
            {
            (ctx)=>{
                return(
                    <div className="display-item">
             <p>{props.productID}</p>
             <p>{props.productName}</p>
             <p>{props.sellingPrice}{}</p>
             <p>{props.type}</p>
              <button onClick={()=>{ctx.onDelete(props.i)}} className={style.button}>Delete</button>
            </div>
                )
            } 
            }    
        </Auth.Consumer>
    )
}

