import React, { useState } from "react";
import axios from "axios";
import "./Update.css";
import { useNavigate, useParams } from "react-router-dom";


function Update({setTrigger}) {
  const [name,setName]=useState('')
  const [price,setPrice]=useState(null)
  const [category,setCategories]=useState('')
  const [imageUrl,setImageUrl]=useState('')

const info={name:name,price:price,category:category,imageUrl:imageUrl}
  const navigation=useNavigate()
const params= useParams()
console.log(params);
  const handleSubmit = async () => {
    setTrigger(true)
    try{
     await axios.put(`http://localhost:3001/api/items/update/${params.id}`, info)
          window.alert("item Updated successfully");
          navigation("/")
        

    }catch(err){
      console.log(err);
    }
    }
      

  return (
    <div className="FormContainer">
      <div className="FormGroup">
        <label className="Label" htmlFor="title">
          Update-Title:
        </label>
        <input
          className="Input"
          type="text"
          id="title"
          name="title"
          onChange={(e) => setName(e.target.value)}
        />
      </div> 
      
      <div className="FormGroup">
        <label className="Label" htmlFor="image">
          Image URL:
        </label>
        <input
          className="Input"
          type="text"
          id="image"
          name="image"
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <div className="FormGroup">
        <label className="Label" htmlFor="price">
          Price:
        </label>
        <input
          className="Input"
          type="number"
          id="price"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="FormGroup">
        <label className="Label" htmlFor="category">
          Update-Category:
        </label>
        <select
          className="Select"
          id="category"
          name="category"
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="fridge">fridge</option>
          <option value="electric oven">electric oven</option>
          <option value="washing machine">washing machine</option>
        </select>
      </div>
      <button className="Button"  onClick={((e)=> handleSubmit(e))}>
        Update Item
      </button>
    </div>
  );
}

export default Update;
