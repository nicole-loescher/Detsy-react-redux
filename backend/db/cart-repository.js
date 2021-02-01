// const { ProductDetail } = require('../../frontend/src/components/ProductDetail');
const { Cart, Product, User } = require('./models');

async function add(details) {
    const cart = await Cart.create(details);
    return cart.id;
}

async function list() {
    return await Cart.findAll({include: {
        model: Product,
        model: User
    }})
}
module.exports = {
    add,
    list
}