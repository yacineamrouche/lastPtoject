const express = require("express");
const itemRoutes = require('./routes/item.routes')

// const db = require('./database-mysql');

const cors=require("cors")
const app = express();
const PORT =  3001

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port",PORT);
});
