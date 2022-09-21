const express = require("express");
const router=express.Router()
const tourController=require('../controllers/tour.controllers');
const viewCount = require("../middleware/viewCount");


router.route('/tours')
.get(tourController.getAllTour)
.post(tourController.createToure)
router.route('/tour/trending')
.get(tourController.trendingTour)

router.route('/tour/cheapest')
.get(tourController.cheapestTour)


router.route('/tour/:id')
.get(viewCount,tourController.getTourById)
.patch(tourController.updateTour)


module.exports=router;