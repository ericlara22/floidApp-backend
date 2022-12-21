const {productService, loginService} = require('../services');

module.exports = {
    getAllProducts: async (req, res) => {
        try {
            const {id, password} = req.body;
            if(id && password){
                const result = await loginService.login(id, password);
                res.status(200).json({message: result.msg, data: result.products});
            } else {
                res.status(401).json({message: 'No autorizado', data: null });
            }
        } catch (error) {
            res.status(400).json({message: error.message});      
        }
    }
}   