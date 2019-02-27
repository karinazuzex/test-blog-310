
function getVar(key, defaultValue) {
  if(key in process.env)
    return process.env[key];
  else
    return defaultValue;
}

/* Provide  default values here that are safe to share on github, for dev/testing */
/* For production, or otherwise security-sensitive values, use environment variables */

module.exports.sample = getVar('sample', 'myvalue');

