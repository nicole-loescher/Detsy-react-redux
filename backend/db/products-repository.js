// const { delete } = require('../routes/api/products');
const { Product, Category, Review, User } = require('./models');


async function list() {
    return await Product.findAll({include: {
        model: Category,
        model: Review,
        include: User
    }})
}

async function one(id) {
    return await Product.findOne({where: id, include: Category});
}

async function add(details) {
    const product = await Product.create(details);
    return product.id
}

async function update(details) {
    const id = details.id;
    delete details.id;
    const newProduct = await Product.findByPk(id)
    await newProduct.update(details);
    return newProduct;
}

async function deleteProduct(id) {
    const product = await Product.findByPk(id);
    await product.destroy({ where: { id }});
    return id;
}

module.exports = {
    list, 
    one,
    add,
    update,
    deleteProduct
}
