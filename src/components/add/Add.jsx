import React, { useState } from "react";
import axios from "axios";
import "./add.css";
import { useNavigate } from "react-router-dom";

const AddItemForm = ({ setTrigger }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategories] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigation = useNavigate();

  const handleSubmit = () => {
    setTrigger(true)
    axios
      .post("http://localhost:3001/api/items/add", {
        name: name,
        price: price,
        category: category,
        imageUrl: imageUrl,
      })
      .then((res) => {
        console.log(res);
        window.alert("item added successfully");
        navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="FormContainer">
      <div className="FormGroup">
        <label className="Label" htmlFor="title">
          Title:
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
          Category:
        </label>
        <select
          className="Select"
          id="category"
          name="category"
          onChange={(e) => setCategories(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="fridge">fridge</option>
          <option value="electric oven">electric oven </option>
          <option value="washing machine">washing machine</option>
        </select>
      </div>

      <button className="Button" type="submit" onClick={() => handleSubmit()}>
        Add Item
      </button>
    </div>
  );
};

export default AddItemForm;
