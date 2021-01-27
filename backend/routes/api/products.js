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
    console.group(products)
    return res.json(products)

}));

router.get('/:id', asyncHandler(async(req, res)=>{
    const product = await ProductRepo.one(req.params.id)
    return res.json(product)
}));

// router.post('/', , asyncHandler(async(req, res)=>{
//     const id = await ProductRepo.create(req.body);
//     return res.redirect(`/products/${id}`)
// }));

router.post('', validateProduct, asyncHandler(async (req, res) => {
        const { name, imgPath, price, category_id, user_id, description } = req.body;
    const product = await Product.add({ name, imgPath, price, category_id, user_id, description });

        return res.json({
            product,
        });
    }),
);

router.put('/:productId', validateProduct, asyncHandler(async (req, res)=>{
    const { name, imgPath, price, category_id, user_id, description } = req.body;
    const id = await ProductRepo.update({ name, imgPath, price, category_id, user_id, description });
    const product = await ProductRepo.one(id);
    
    return res.json({
        product,
    });
}))



module.exports = router;