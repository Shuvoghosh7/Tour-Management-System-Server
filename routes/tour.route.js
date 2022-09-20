const express = require("express");
const router=express.Router()
const tourController=require('../controllers/tour.controllers')


router.route('/tours')
.get(tourController.getAllTour)
.post(tourController.createToure)


module.exports=router;