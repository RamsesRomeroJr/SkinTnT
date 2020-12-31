const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const {requireAuth} = require('../../utils/auth')

const {Spot, Opening, Rating} = require('../../db/models');

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

router.post('/review',requireAuth, asyncHandler(async (req,res) => {
    const {userId,
           spotId,
           review,
           rating} = req.body
    // check if req.user.id matches userId and other validations
    //for rating (max 5) and review length
}))

module.exports = router;
