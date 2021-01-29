const {Review} = require('./models');

async function add(details) {
    const review = await Review.create(details);
    console.log(review)
    return review
};

async function list() {
    const reviews = await Review.findAll();
    return reviews;
}

module.exports = {
    add,
    list
}