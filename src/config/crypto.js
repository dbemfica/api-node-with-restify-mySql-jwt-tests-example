require('dotenv').config();
const crypto = require('crypto');

module.exports = {
    encrypt: (text) => {
        let hash = crypto.createHmac('sha256', process.env.CRYPTO_KEY)
        hash.update(text);
        return hash.digest('hex');
    }
};