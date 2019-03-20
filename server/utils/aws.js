const aws = require("aws-sdk");
const config = require("../config");

const s3 = new aws.S3();

s3.config.update({
    accessKeyId: config.aws_access_key_id,
    secretAccessKey: config.aws_secret_access_key,
});

const getDownloadUrl = () => {
    const params = {
        Bucket: config.aws_bucket,
        Key: config.aws_key,
        Expires: config.aws_expires,
    };
    return new Promise((resolve, reject) => {
        s3.getSignedUrl("getObject", params, (err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports = {
    getDownloadUrl,
};
