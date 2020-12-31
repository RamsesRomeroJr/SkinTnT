const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');

const {Spot} = require('../../db/models');

router.get('/', asyncHandler(async (req, res) =>{
    const spots = await Spot.findAll();
    res.json({spots: spots})
}));

module.exports = router;
