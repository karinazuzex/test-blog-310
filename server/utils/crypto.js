const crypto = require("crypto");
const config = require("../config");

const algorithm = "aes-256-cbc";
const key = config.crypto_key;

const encrypt = (data) => {
    const cipher = crypto.createCipher(algorithm, Buffer.from(key));
    const encrypted = cipher.update(data);
    return Buffer.concat([encrypted, cipher.final()]).toString("hex");
};

const decrypt = (data) => {
    const decipher = crypto.createDecipher(algorithm, Buffer.from(key));
    const decrypted = decipher.update(Buffer.from(data, "hex"));
    return Buffer.concat([decrypted, decipher.final()]).toString();
};

module.exports = {
    encrypt,
    decrypt,
};
