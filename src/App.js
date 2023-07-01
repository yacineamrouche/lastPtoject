import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Update from "./components/update/Update.jsx";
import Add from "./components/add/Add.jsx";
import Search from "./components/Search/Search.jsx";
import Products from "./components/Products.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [filter, setFilter] = useState("");
 

  const fetch = () => {
    axios
      .get("http://localhost:3001/api/items/getAll")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };


  const handleFilter = (name) => {
    const filter = data.filter((e) => {

      return e.name === name;
    });
    setData(filter);
  
  };

  useEffect(() => {
    fetch();
    setTrigger(false);
  }, [trigger]);

  return (
    <div className="App">
      <div className="searchForm">
        <input
          type="text"
          placeholder="looking for ..."
          className="search"
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="searchButton" onClick={() => handleFilter(filter)}>
          search
        </button>
      </div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                data={data}
                setTrigger={setTrigger}
                
              />
            }
          />

          <Route path="/search" element={<Search />} />

          <Route
            path="/Update/:id"
            element={<Update setTrigger={setTrigger} />}
          />
          <Route path="/Add" element={<Add setTrigger={setTrigger} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
