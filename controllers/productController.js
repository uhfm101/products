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

module.exports.updateProduct = async function(req, res){
    await Product.update({
        product_name: req.body.product_name,
        category: req.body.category,
        description: req.body.description
    }, {
        where: {
            id:req.params.id
        }
        });
    res.redirect(`/products/profile/${req.params.id}`)
}