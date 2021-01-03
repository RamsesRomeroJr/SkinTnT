const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../utils/auth')

const {Spot, Opening, Rating} = require('../../db/models');

//api to fetch individual spot
router.get('/:spotId', asyncHandler(async (req, res) =>{
    const spotId = parseInt(req.params.spotId, 10);

    const spot = await Spot.findByPk(spotId, {
        include:[
            {
                model: Opening,

            },
            {
                model: Rating,
            }
        ]
    });
    res.json({spot: spot})
}));

//api to book opening with userId, spotId, openingId by updating the userId column on a specific opening
router.put('/book', asyncHandler(async (req, res) => {

}));

//api to cancel opening by turning userId on opening back to null
router.put('/book/cancel', asyncHandler(async (req, res) => {

}));


//api to edit rating (updating columns)

//api to create rating
router.post('/rating',requireAuth, asyncHandler(async (req,res) => {
    const {userId,
           spotId,
           review,
           rating} = req.body
    // check if req.user.id matches userId and other validations
    //for rating (max 5) and review length
}))

module.exports = router;
