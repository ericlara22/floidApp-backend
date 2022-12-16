const {loginService} = require('../services');

module.exports = {
    login: async (req,res) => {        
        try {
            const {id, password} = req.body;
            if(id && password){
                const result = await loginService(id, password)
                res.status(result.code).json({message: result.msg, data: result.products});
            } else {
                res.status(400).json({message: 'missing data', data: null });
            }
        } catch (error) {
            res.status(400).json({message: error});      
        }
    }
}