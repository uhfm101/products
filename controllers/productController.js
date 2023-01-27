const {Product} = require('../models')
const categories = ['home goods', 'construction', 'furniture']

module.exports.renderProfile = async function(req, res){
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/profile', {product})
}

module.exports.renderEditForm = async function(req, res){
    const product = await Product.findByPk(
        req.params.id
    );
    res.render('products/edit', {product, categories})
}