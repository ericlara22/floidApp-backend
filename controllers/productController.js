const {productService} = require('../services');

module.exports = {
    getAllProducts: async (req,res) => {
        try {
            console.log(req.body)
            const {id, password} = req.body;
            if(id && password){
                const result = await productService(id, password);
                console.log(result)
                res.status(result.code).json({message: result.msg, data: result.products});
            } else {
                res.status(400).json({message: 'missing data', data: null });
            }
        } catch (error) {
            res.status(400).json({message: error.message});      
        }
    }
}   