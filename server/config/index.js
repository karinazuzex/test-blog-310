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
    aws_key_pair_id: getVar("aws_key_pair_id", "APKAJEHIWRAQFZPDSWUA"),
    aws_private_key_string: getVar(
        "aws_private_key_string",
`-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA07ybqwovwGW5kqWKK1RN7mz7Gp23FzsC2z9x3JCrmVncgGKv
1Hgfcw85roZVdjjGdriIqZridedcg/xgUFBuFTdcnp4eUxLd8yRRXWwmL+T11ZQR
PmBSQ0sYrWQQK2c9edMFyWIQpiVJzsWefK8dLj41jKNQjsPqEiBYrJW2l1IcQWHy
6caS3IKI6PsMQdcrAHzrgmYJ447a1M7ejcVJ8ImjpfTLjBSEVA0B1v+KypVQtEJ5
/bbg9+uy+bEyzPXD/tVJ3XjBqu2vuNtOQulbzkgUAdTuLJNQs4wK5AZ56vyER6yp
KDh5rCzx6OMeBU4By468OW6hbQL87NQupUbo/QIDAQABAoIBAEcwzBo3A5Up3roq
xIkLAGTg6ZCqZIwAAFbdPxhM4BVgfF4CUGIcvV4/SUKf0g48yqXSJ8j21ZuU3atW
6L84O7sQcSi3uzRtTIjatiy2FyTVU76q2R1i32XW0wZBdZpSTP4v8GskeLqUIPvP
wBjl++a3bePKaWSHBKVxkL7+W3UGvv/g1bqPv22Wlq1eVZmlAWIoBwB+u9DkLSVU
oN38IeeZnm/hfF+Uxfh0u/gOwX+j0Bk2qC81hGKk3DdsoxQCplrBMtxRg2FtBg7e
/hzaDwEbLgA3AovpIlemwoRLE08pYlwuuMV6tWqDdMHjTBfGXfLt4XwAriIlfxCL
xROV+QECgYEA6SUOvtdIaY2hw28QhKrAAi3hWcEvRTzI1VTW5XX/aqBWCGZDkfVE
AhcfwAD8OSeN4bSARdvb4lpXNEaXBwqhidZmajV2iK3/HtRf5BpgtK8H2UXULofb
D1MeceJP/9xNH5W2OGBh8a+BH76hcNVLsXDzpc6S/YZkiZWoxo/Ter0CgYEA6H5M
7y9qcijyCFB8lBFrcmWXpAMRMTyNI9EQZzMz6BOG5QQ7nTwinhVZHNXgcnnaBbev
IlLXA63XnPAKKtJ4Ky2D6wkqKCGU5MBocV/18aMii2SLG9UNyISyrPcxFbv1MABh
5RW69pM0nkyBY6JG9J2epkJ+27cVN7qKCeHDK0ECgYEAxvYQ91vROALeIWIOvqjY
4wM0ZNwv8u5ElYmpOnjQV7YstU5QK6cbOo1xUvGETWIr+omHThaqNyjRcpMrH586
695D2C930HxsU2r5yjeYf5k/IXQt9ueJUjKksJtpmffu+R1SPBpEe3RCxUxxiVD9
H5g81SrM1f5ynddSCOGEoCECgYEA2D4BGMclXqEu3QTfmmjJY1GSxX4E06LaM+IU
O6ioMsdWxFQ3jnuMRzTb+bIEXPVxD7hVMLuUOVvMG7A4BLRWCPMAq++OQl1Zu5oq
iqkSfHmbe8M8j9qOQ18JQU95XBnCZ68zXnvjtcwdOM832Y/qJ0MjeMiIbZvQJFFg
auiNOwECgYAtC/glzOigOF7rdvbszh8HTpf5giacJbSRFF/hEP3z0O1VYNvWEQb1
qLPJ30CywU4zxjcbN9IweaZGFVffZKJU1hrZKj1fOP6qkVIdlT/DiuplH614Gz7j
0vVe0pU+irp7fdG1JFYAJX97rZWZwumqquFvf9PWTpnWv1oedWNc2g==
-----END RSA PRIVATE KEY-----`),
    aws_file_path: getVar("aws_file_path", "https://dmig02f1dvad2.cloudfront.net/test-dummy.msi"),
    aws_expire_timeout: getVar("aws_expire_timeout", 48 * 60),
    aws_expire_timeout_padding: getVar("aws_expire_timeout_padding", 2),
    crypto_key: getVar("crypto_key", "test_crypto_key"),
    WEBSITE_DOMAIN: getVar(
        "WEBSITE_DOMAIN",
        process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.memurai.com",
    ),
};
