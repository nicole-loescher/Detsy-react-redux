const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const ReviewRepo = require('../../db/review-repository');

router.get('/', asyncHandler(async(req, res)=>{
    const reviews = await ReviewRepo.list();
    return res.json(reviews)
}));

router.post('/', asyncHandler(async(req, res)=>{
    const { user_id, product_id, comments, rating } = req.body;
    const review = await ReviewRepo.add({ user_id, product_id, comments, rating });

    return res.json({ review })
}));

router.get('/:productId', asyncHandler(async(req, res)=>{
    console.log('=====hit route=======')
    const productId = req.params.productId;
    const productReview = await ReviewRepo.one(productId);

    console.log(res.json(productReview), '........printed from api route......')
}))

module.exports = router;