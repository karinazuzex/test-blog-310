const cfsign = require("aws-cloudfront-sign");
const moment = require("moment");
const config = require("../config");

const getDownloadUrl = () => {
    const params = {
        keypairId: config.aws_key_pair_id,
        privateKeyString: config.aws_private_key_string,
        expireTime: moment().add({ days: 2 }).unix(),
    };
    return new Promise((resolve, reject) => {
        try {
            const signedUrl = cfsign.getSignedUrl(
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
