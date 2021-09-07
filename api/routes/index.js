const express = require("express");
const router = express.Router();
const {getAllItems,addItem,deleteItem} =require("./item")

router.get("/allitems",getAllItems)
router.post("/additem",addItem)
router.get("/deleteitem/:itemId",deleteItem)


module.exports = router;
