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
    aws_private_key_string: getVar(
        "aws_private_key_string",
`-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAh9u5BHN9A7GpZm30qEV8Eng0/2mrgsaaXb9OsyE0gaW+/Arq
FRU5vsvEUia247t3UqKrSHrKaWMrcqP5Qs/lh9f4MfWQ6YUXeeJ9QI654j9LILZk
xl8Z7lCLwh1o9FJTUH+JFYb8QoQuyGVdFRiiuMc5JfNMfFZ5XQwzbNGZDMPmaP4A
RulHBbNKf9kJv76e5HD10X0TmaBKGTHejQ3n2vBhDvBsApvrARU7urDlFc9E24nN
VWU958qEiJ5NekkYwqo4NCr9WLk4Jhm7qp0verR06bQx+yX/RfmotMoitjF7rGC/
U9odhAjmtIwMvkk+dsTpQoA0m4J0kxdGvCNrZwIDAQABAoIBAHm1xlLOg7jDeNdi
ukPlu/lv50rKB/Top3JE6ORhYwCi1C5ION0aXtknA4H1XPM4BvXo9TnBh4RSa6IQ
dEX+qcrBGIDpViFeMmHnHf6v3qdpvIxZ2n48xKZTUmFcp6H5/tmm59B5VZThhmfR
J0q2/1A6amAtTuA1OBS70XYzb8GWj/Ub/qGgu6rTwmKkcJEMY56mRNDFrZ81bF6a
f5xUt4+9WZe0+FNOp+JRp7eP1Y5MIAOymHBBCpIleO1phJAa/u6noete9wtCj7a0
h4aG7e7egJZNzrQXrjrdh6lNMFENU+vtdiuhN+qKO59Z52pf+taJOrSKRFp64u2u
M8LiWwECgYEAx3Xc6vyuH0nGWL3wOilRipG0uZzyKkJbs/g065DSwWNHRzjPbtir
ESEOBhnrFGtPiuzDwimjvznZFw1QRbFmEjtHAL45rA8uiIqGAIZcjpliOp0TDP3Q
W9YJ5WPclbUEZXSfwYNtdC05+4IGyrzZUFQCS9Us/pMNlETmwWRNLBcCgYEArl56
rdcEpW8MPux4guSKXCrJeav32vundjGzmY12HnXBaHBQbbFAyXnr400FzS+aEdYi
rCyoBMCjxEF+k+Ywkpu66GeaK+JImzI26tjYETXSP18E9JCdK+uB8WaIoTWCdOHn
JLP2mti8IBJet+xn62L14uMZr8BA+52ceYxXvTECgYAId4pfN0a08U7IKZfvAB4E
AddoIa9t988ovpqQfV9U8j/uWA0GKZBpc7vCqor+HOgNf6t3rIjU70G15szHiJZK
o9WJxIlyMlrJVQgHMazwKLawwkYywPt9SoK1CB4vBLYhEGhPsKKO0fSqJoTfSlD3
Rfmq+mukit2Cs8IP55AXFQKBgEblFxATOkphCiOTVbQyY6bxppUXvGCGrSG7N4CZ
KYtc6VQjRjAzP1orfiMer9srHYNfAx3p0i6MfIlQ77wGfX0+YBIZ/W8WQ9sF4Zo+
rCrjLSai5YriOWUgDecufyK8dNw89RPRL9TphiOsFGLHdcEYrUygdVMl4cXr4TDy
RMIhAoGAMEOxpMKMyBI2LQWQ6sZQZ3Fz9EntSmGWH8ntkZ9nQlEyln+7Zlm2/mVH
w2rjksAZiwvq9BT27n48Ok3JKHZzsCFTE75Hxx5wg6spx7Vl55AhjBFXqk8AYgl3
/Y+bGUim9QBpWU5ZsmNifU4SmFee73kZAsZuwTFPgraPAJ4EcwE=
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
