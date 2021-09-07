const mongoose = require("mongoose");
const Item = require("../models/items");

async function getAllItems(req,res){
    try
    {
        let items = await Item.find({})
        // console.log("Sending"+items)
        return res.status(200).send({success:true,data:items}) 
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send({success:false,msg:"Server Error"})
    }
}

async function addItem(req,res){
    try{
        console.log("Body")
        console.log(req.body)
        let newItem = new Item({
            text:   req.body.text,
            amount:req.body.amount
        })
        await newItem.save();
        console.log("New Item"+newItem)
        res.status(200).send({success:true,msg:"New Item updated"})
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send({success:false,msg:"Server Error"})
    }

}

async function deleteItem(req,res){
    try
    {
        let itemId=req.params.itemId
        let item = await Item.findByIdAndDelete({_id:itemId})
        console.log("Item Deleted"+item)
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send({success:false,msg:"Server Error"})
    }
}

module.exports={getAllItems,addItem,deleteItem}