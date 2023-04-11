import React from "react";
import Catalog from "./Catalog";

const ProductItem = (props)=>{
    return(
    <div className="catalog-item">
    <Catalog type="Electronics"/>
    <Catalog type="Food"/>
    <Catalog type="SkinCare"/>
    </div>
    )
}
export default ProductItem;