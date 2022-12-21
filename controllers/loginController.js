const {loginService} = require('../services');

module.exports = {
    login: async (req,res) => {        
        try {
            const {id, password} = req.body;
            if(id && password){
                const result = await loginService.login(id, password)
                if(result.code == 200){
                    res.status(200).json({message: result.msg, data: result.products});
                } else {
                    res.status(400).json({message: result, data: null});
                }
            } else {
                res.status(400).json({message: 'Faltan campos por completar', data: null });
            }
        } catch (error) {
            res.status(400).json({message: error});      
        }
    }
}