const Tours=require('../models/tourManagement.modle')
const { createTourService, getAllTourServices } = require('../services/tour.services')

exports.getAllTour=async(req,res,next)=>{
    try {
        const result = await getAllTourServices()
        res.status(200).json({
            status:"success",
            data:result 
          })
    } catch (error) {
        res.status(400).json({
            stauts:"fail",
            message: "Cant not get data",
            error : error.message
          })
    }
}

exports.createToure= async(req,res,next)=>{
    try {
        const result = await createTourService(req.body);
        res.status(200).json({
            stauts: "success",
            massage: "Data inside successfully",
            data: result
          })

    } catch (error) {
        res.status(400).json({
            stauts:"fail",
            message: "Data is not inserted",
            error : error.message
          })
    }
}