const { ProductModel } = require("../model/product.model");

exports.add = async(req,res) =>{
    const { name, description,price} = req.body

    try {
            const data = new ProductModel({name, description, price})        
            await data.save();
            res.status(200).json({message:"data saved successfully"})
        } catch (error) {
            res.status(400).json({message:error.message});
            
    }
}
exports.delete = async(req,res) =>{
    const _id = req.params.id;
    console.log(_id);

    try {
            const data =await ProductModel.findByIdAndDelete({_id})        
            res.status(200).json({message:"data deleted successfully"})
        } catch (error) {
            res.status(400).json({message:error.message});
            
    }
}
exports.getall = async(req,res) =>{

    try {
            const data = await ProductModel.find()        
            res.status(200).json({data:data})
        } catch (error) {
            res.status(400).json({message:error.message});
            
    }
}
exports.update = async(req,res) =>{
    const _id = req.params.id;

    try {
            const data = await ProductModel.findByIdAndUpdate({_id},req.body)        
            res.status(200).json({message:"data updated successfully"})
        } catch (error) {
            res.status(400).json({message:error.message});
            
    }
}