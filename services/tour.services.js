const Tours=require('../models/tourManagement.modle')


exports.getAllTourServices=async()=>{
    const result = await Tours.find({});
    return result;
}
exports.createTourService = async (data) => {
    const product = await Tours.create(data);
    return product;
}