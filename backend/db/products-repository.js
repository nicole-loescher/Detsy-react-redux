const { Product } = require('./models');

async function list() {
    return await Product.findAll()
}
async function one(id) {
    return await Product.findByPk(id);
}

module.exports = {
    list, 
    one,
}
