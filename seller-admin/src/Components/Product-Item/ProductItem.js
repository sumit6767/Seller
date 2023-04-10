import React from "react";
import Catalog from "./Catalog";

const ProductItem = (props)=>{
    return(
    <>
    <Catalog type="Electronics"/>
    <Catalog type="Food"/>
    <Catalog type="SkinCare"/>
    </>
    )
}
export default ProductItem;