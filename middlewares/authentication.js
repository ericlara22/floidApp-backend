const axios = require('axios');
const {accessToken, apiUrl} = require('../config');

module.exports = {
    authenticate: async (id, password) => {

        try {
            const data = {id, password};
            let config = {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'content-type': 'application/json',
                    withCredentials: true
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