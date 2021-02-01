const express = require('express');
const router = express.Router();
const ProductRepo = require('../../db/products-repository')
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);


router.get('/:criteria', asyncHandler(async(req, res)=>{
    criteria = req.params.criteria;
    const results = await ProductRepo.search(criteria);
    
    res.json({
        results
    })
}))

module.exports = router;