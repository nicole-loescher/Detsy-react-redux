const { Product, Category } = require('./models');

async function list() {
    return await Product.findAll()
}

async function one(id) {
    return await Product.findByPk(id);
}

async function create(details) {
    const product = await Product.create(details);
    return product.id
}

module.exports = {
    list, 
    one,
    create
}
