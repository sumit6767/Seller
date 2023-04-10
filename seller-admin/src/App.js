import './App.css';
import React,{useState} from 'react';
import Header from './Components/Header/Header';
import Product from './Components/Product-catalog/Product';
import ProductItem from './Components/Product-Item/ProductItem';
import Auth from './Components/Context/Auth';

function App() {
  const [productItem,setProductItem] = useState([]);
  const [i,setI] = useState(1)
  console.log(productItem)
  const formSubmit = (item)=>{
    setProductItem((prevItem)=>{
      prevItem.push(item)
      return [...prevItem]
    })
    localStorage.setItem(`${i}`,JSON.stringify(item));
    setI((i)=>{
      return i+1;
    })
  }
  const itemRemove = (index)=>{
    setProductItem((prevItem)=>{
      delete prevItem[+index-1];
      return [...prevItem]
    })
  }
  const deleteItem = (i)=>{
    localStorage.removeItem(i);
    itemRemove(i);
  }
  return (
    <Auth.Provider value={{onDelete:deleteItem}}>
    <Header/>
    <Product formSubmit={formSubmit}/>
    <ProductItem />
    </Auth.Provider>
  );
}

export default App;
