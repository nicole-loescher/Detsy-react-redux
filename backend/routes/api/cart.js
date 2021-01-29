const router = express.Router();
const asyncHandler = require('express-async-handler');
const Cart = require('../../db/models');

router.get('/:id', asyncHandler( async(req, res)=>{
    const cart = await Cart.findByPk(id)
    return res.json(cart)
}));

router.post('/', asyncHandler( async(req, res)=>{
    const { product, user} = req.body
}))
