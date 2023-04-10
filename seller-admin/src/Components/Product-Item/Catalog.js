import React from "react";
import Display from "./Display";
import './Catalog.css'

const Catalog = (props)=>{
    const filteredData = [];
    
    for(let i = 1; i <= localStorage.length;i++){
        let obj = JSON.parse(localStorage.getItem(i+""))
        if(obj.category===props.type){
            filteredData.push({...obj,i:i+""})
        }
    }

    return(
        <div className="catalog"> 
            <h2>{props.type}</h2>
            {
                filteredData.map((item)=>{
                    return <Display type={props.type} key={Math.random()} i={item.i} sellingPrice={item.sellingPrice} productID={item.productID} productName={item.productName} />
                })
            }
        </div>
    )
}
export default Catalog