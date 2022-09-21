const express = require("express");
const router=express.Router()
const tourController=require('../controllers/tour.controllers')


router.route('/tours')
.get(tourController.getAllTour)
.post(tourController.createToure)

router.route('/tour/cheapest')
.get(tourController.cheapestTour)


router.route('/tour/:id')
.get(tourController.getTourById)
.patch(tourController.updateTour)


module.exports=router;