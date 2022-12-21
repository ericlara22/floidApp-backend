require('dotenv/config');

const url = 'https://sandbox.floid.app/cl/banco_santander_personas/products';
const token = 'b69d37df386694f97465360f40480a11afd048b6435850ec236b25083196dc3c974891f084e19e51fc1b77ddcbe2bff47a802ce0136cb4e4aa4b66ca9f79f150'


module.exports = {
    port: process.env.PORT || 3001,
    apiUrl: process.env.URL || url,
    accessToken: process.env.TOKEN || token
}