const axios = require('axios');
const {accessToken, apiUrl} = require('../config');

module.exports = {
    login: async (id, password) => {
        try {
            const data = {id, password};
            let config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'content-type': 'application/json'
                }
            }
            const response = axios.post(apiUrl, data, config).then( result => {
                return result.data
            }).catch( () => {
                return 'Error de credenciales'
            })
        return response
        } catch (error) {
            return error.message;
        }
    }
}