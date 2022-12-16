const axios = require('axios');
const {apiToken, apiUrl} = require('../config');

module.exports = {
    getAllProductsByUser: async (id, password) => {
        const data = {id, password};

        let config = {
            headers: {
                Authorization: "Bearer ",apiToken,
                ['content-type']: "application/json"
            }
        }

        axios.post(apiUrl, data, config).then( res => {
            console.log(res.data)
            return res.data
        })
    }
}