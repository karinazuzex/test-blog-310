
function getVar(key, defaultValue) {
  if(key in process.env)
    return process.env[key];
  else
    return defaultValue;
}

/* Provide  default values here that are safe to share on github, for dev/testing */
/* For production, or otherwise security-sensitive values, use environment variables */

module.exports.sample = getVar('sample', 'myvalue');

module.exports.smtp_server = getVar('smtp_server', 'smtp.sendgrid.net');
module.exports.smtp_port = getVar('smtp_port', '465');
module.exports.smtp_username = getVar('smtp_username', 'apikey');
module.exports.smtp_password = getVar('smtp_password', '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');


