
function getVar(key, defaultValue) {
  if(key in process.env)
    return process.env[key];
  else
    return defaultValue;
}

/* Provide  default values here that are safe to share on github, for dev/testing */
/* For production, or otherwise security-sensitive values, use environment variables */

module.exports = {
    smtp_server: getVar("smtp_server", "smtp.sendgrid.net"),
    smtp_port: getVar("smtp_port", "465"),
    smtp_username: getVar("smtp_username", "apikey"),
    smtp_password: getVar("smtp_password", "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"),
    aws_key_pair_id: getVar("aws_key_pair_id", ""),
    aws_private_key_string: getVar("aws_private_key_string", ""),
    aws_file_path: getVar("aws_file_path", ""),
};
