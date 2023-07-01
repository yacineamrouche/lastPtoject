const router = require('express').Router();
const itemController = require("../controllers/item.controller");

router.get("/getAll", itemController.selectAll);
router.post("/add", itemController.add);
router.delete("/delete/:id", itemController.del);
router.put("/update/:id", itemController.update);




module.exports = router;
