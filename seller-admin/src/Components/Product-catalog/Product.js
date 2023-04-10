import React,{useState}  from "react";
import Input from "./Input";
import style from './Classes.module.css'

function Product(props){
    const [itemDetail,setDetail] = useState({productID:"",sellingPrice:"",productName:"",category:"Electronics"})
    function changeId(e){
        setDetail({...itemDetail,productID:e.target.value})
    }
    function changePrice(e){
        setDetail({...itemDetail,sellingPrice:e.target.value})
    }
    function changeName(e){
        setDetail({...itemDetail,productName:e.target.value})
    }
    function changeCategory(e){
        setDetail({...itemDetail,category:e.target.value})
    }
    function itemSubmit(e){
        e.preventDefault();
        console.log(itemDetail)
        props.formSubmit(itemDetail)
        setDetail({productID:"",sellingPrice:"",productName:"",category:"Electronics"})
    }
    return(
        <form className="form" onSubmit={itemSubmit}>
            <Input className={style.input} id="id" name="Product ID" type="number" value={itemDetail.productID} onChange={changeId}/>
            <Input className={style.input} id="price" type="text" name="Selling Price" value={itemDetail.sellingPrice} onChange={changePrice}/>
            <Input className={style.input} id="name" type="text" name="Product Name" value={itemDetail.productName} onChange={changeName}/>
            <select className={style.select} name="select" value={itemDetail.category} onChange={changeCategory}>
                <option value="Electronics">Electronics</option>
                <option value="Food">Food</option>
                <option value="SkinCare">SkinCare</option>
            </select>
            <button className={style.button}>Add Product</button>
        </form>
    )
}


export default Product;