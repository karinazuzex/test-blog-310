const cfsign = require("aws-cloudfront-sign");
const moment = require("moment");
const config = require("../config");

const getDownloadUrl = () => {
    const params = {
        keypairId: config.aws_key_pair_id,
        privateKeyPath: config.aws_private_key_path,
        expireTime: moment().add({ minutes: parseInt(config.aws_expire_timeout, 10) }).unix() * 1000,
    };
    return new Promise(async (resolve, reject) => {
        try {
            const signedUrl = await cfsign.getSignedUrl(
                config.aws_file_path,
                params,
            );
            resolve(signedUrl);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = {
    getDownloadUrl,
};
