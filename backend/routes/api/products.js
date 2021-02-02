const express = require('express')
const asyncHandler = require('express-async-handler');
const ProductRepo = require('../../db/products-repository')
const router = express.Router();
const { Product } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const validateProduct = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your product.'),
    check('imgPath')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide an image URL for your product.'),
    check('price')
        .exists({ checkFalsy: true })
        .isInt()
        .withMessage('Please enter a price for your product'),
    handleValidationErrors,
]   

router.get('/', asyncHandler(async(req, res)=> {
    const products = await ProductRepo.list();
    // console.group(products)
    return res.json(products)

}));

router.get('/:id', asyncHandler(async(req, res)=>{
    const product = await ProductRepo.one(req.params.id)
    return res.json(product)
}));

router.post('', validateProduct, asyncHandler(async (req, res) => {
        const { id, name, imgPath, price, category_id, user_id, description } = req.body;
        const product = await ProductRepo.add({id, name, imgPath, price, category_id, user_id, description });
        return res.json({
            product,
        });
    })
);

router.put('/:id', validateProduct, asyncHandler(async (req, res)=>{
    const id = req.params.id;
    const { name, imgPath, price, category_id, user_id, description } = req.body;
    const product = await ProductRepo.update({ id, name, imgPath, price, category_id, user_id, description });
    return res.json({product});
}));

router.delete('/:id', asyncHandler(async (req, res)=> {
    const productId = await ProductRepo.deleteProduct(req.params.id);
    res.status(200).json('deleted')
}));



module.exports = router;