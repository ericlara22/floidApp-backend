const axios = require('axios');
const {} = require('../config');

module.exports = {
    getAllProductsByUser: async (id, password) => {
        const data = {id, password};

        let config = {
            headers: {
                Authorization: apiToken
            }
        }

        axios.post(apiUrl, data, config).then( res => {
            return res.data
        })
    }
}