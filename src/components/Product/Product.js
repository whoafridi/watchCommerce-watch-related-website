import ProductDetail from "../ProductDetail/ProductDetail";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Product = () => {
    const {id} = useParams()

    const [service, setService] = useState([]);
    const [single, setSingle] = useState([]);
  
      useEffect(()=>{
          fetch("https://arcane-spire-40682.herokuapp.com/products")
          .then(res => res.json())
          .then(data => setService(data));
      },[id])
   
  
      useEffect(()=>{
        const values = service.filter((s) => s._id == id)
        setSingle(values);
      },[service]);

    return (
        <div className="container">
    
    {
      single.map(s => <ProductDetail key={s._id} s={s}/>)
    }
       
    </div>
    )
}

export default Product
