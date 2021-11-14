import React, { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://arcane-spire-40682.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

       // DELETE product
       const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://arcane-spire-40682.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingProducts = products.filter(b => b._id !== id);
                        setProducts(remainingProducts);
                    }
                });
            }
        }

    return (
        
        <div className="container">
          <h1 className="text-center mt-5 mb-3">
          All products details
          </h1>
             <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        </tr>
                    </thead>
                {
                    products.map(s=>
                    <tbody>
                        <tr>
                        <th scope="row">{s.name}</th>
                        <td>{s.price}</td>
                        <td><Button variant="dark" onClick={() => handleDeleteUser(s._id)}>Delete</Button></td>
                        </tr>
                    </tbody>
                    )
                }
                    </table>
        </div>
    )
}

export default ManageProducts
