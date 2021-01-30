const {Review, User} = require('./models');

async function add(details) {
    const review = await Review.create(details);
    console.log(review)
    return review
};

async function list() {
    const reviews = await Review.findAll({include: {model: User}});
    return reviews;
}

async function one(id) {
    const review = await Review.findOne({where: {product_id: id}, include: {model: User}});
    return review;
}

module.exports = {
    add,
    list,
    one
}