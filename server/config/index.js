function getVar(key, defaultValue) {
  if(key in process.env)
    return process.env[key];
  else
    return defaultValue;
}

/* Provide  default values here that are safe to share on github, for dev/testing */
/* For production, or otherwise security-sensitive values, use environment variables */

module.exports = {
    port: getVar("PORT", 3000),
    smtp_server: getVar("smtp_server", "smtp.sendgrid.net"),
    smtp_port: getVar("smtp_port", "465"),
    smtp_username: getVar("smtp_username", "apikey"),
    smtp_password: getVar("smtp_password", "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"),
    aws_key_pair_id: getVar("aws_key_pair_id", "APKAICHXWYVO32V3JGLA"),
    aws_private_key_path: getVar("aws_private_key_string", "server/config/aws-pk.pem"),
    aws_file_path: getVar("aws_file_path", "https://dmig02f1dvad2.cloudfront.net/test-dummy.msi"),
    aws_expire_timeout: getVar("aws_expire_timeout", 48 * 60),
    crypto_key: getVar("crypto_key", "test_crypto_key"),
    memurai_base_url: getVar(
        "memurai_base_url",
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.memurai.com",
    ),
};
