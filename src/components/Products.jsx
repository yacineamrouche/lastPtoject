import axios from "axios";
import { Link } from "react-router-dom";

// import React, { useEffect, useState } from "react";


function Products({data ,setTrigger}  ) {

const del=(id)=>{
  axios
      .delete(`http://localhost:3001/api/items/delete/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
} 
 


  return (
    <div>
      <h2>Electro Shop</h2>
      {data.length !==0 &&  data.map((product) => (
        <div className="container" key={product.id}>
          <img className="image" src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <div>
          <button onClick={()=>{del(product.id);
            setTrigger(true)}}> delete </button>
          </div>
          <div>
            <button >
              <Link to={`/update/${product.id}`}>update</Link> 
               </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products