

const db = require("../database-mysql");


const selectAll = function (req, res) {
  db.query("SELECT * FROM electro ", (err, items) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(items);
    }
  });
};


const add = function (req, res) {
console.log(req.body);
    db.query(`insert into electro (name,price,category,imageUrl) values (?,?,?,?)`,[req.body.name,req.body.price,req.body.category,req.body.imageUrl], (err, items) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };



  const del = function (req, res) {
    db.query("DELETE FROM electro WHERE id=? ",[req.params.id], (err, items) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };


  const update = function (req, res) {
    db.query("update electro set ? where id=?", [req.body,req.params.id],(err, items) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };

module.exports = { selectAll , add , del , update };
