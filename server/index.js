const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const queryString = require("query-string");
const moment = require("moment");
const path = require("path");

const config = require("./config");
const mailer = require("./utils/mailer");
const aws = require("./utils/aws");
const crypto = require("./utils/crypto");
const wwwhisper = require('connect-wwwhisper');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const staticDir = path.join(__dirname, "../static");

app.prepare()
    .then(() => {
        const server = express();

        server.use(wwwhisper(false));
        server.use(bodyParser.json());

        server.get('/robots.txt', (req, res) => (
            res.status(200).sendFile('robots.txt', {
                root: staticDir,
                headers: {
                    'Content-Type': 'text/plain;charset=UTF-8',
                },
            })
        ));

        server.get('/sitemap.xml', (req, res) => (
            res.status(200).sendFile('sitemap.xml', {
                root: staticDir,
                headers: {
                    'Content-Type': 'text/xml;charset=UTF-8',
                },
            })
        ));

        server.get('/BingSiteAuth.xml', (req, res) => (
            res.status(200).sendFile('BingSiteAuth.xml', {
                root: staticDir,
                headers: {
                    'Content-Type': 'text/xml;charset=UTF-8',
                },
            })
        ));

        server.get("/api/request-download-link", async (req,res) => {
            try {
                const awsLink = await aws.getDownloadUrl();
                res.status(200).send(awsLink);
            } catch (err) {
                res.status(400).send(err);
            }
        });

        server.post("/api/contact", async (req, res) => {
            const { email, name, subject, message } = req.body;
            try {
                await mailer.contact({ email, name, subject, message });
                res.status(200).send("success");
            } catch (err) {
                res.status(400).send(err);
            }
        });

        server.post("/api/request-download", async (req, res) => {
            const { email } = req.body;
            try {
                const awsLink = await aws.getDownloadUrl();
                const encryptedCfUrl = crypto.encrypt(awsLink);
                const encryptedEmail = crypto.encrypt(email);
                const url = `${config.WEBSITE_DOMAIN}/download?key=${encryptedCfUrl}&id=${encryptedEmail}`;
                await mailer.download({ email, url });
                res.status(200).send("success");
            } catch (err) {
                res.status(400).send(err);
            }
        });

        server.post("/api/decrypt", async (req, res) => {
            try {
                const { data } = req.body;
                const decryptedData = crypto.decrypt(data);
                res.status(200).send(decryptedData);
            } catch (err) {
                res.status(400).send(err);
            }
        });

        server.post("/api/get-dist-url", async (req, res) => {
            try {
                const { data } = req.body;
                const decryptedCfUrl = crypto.decrypt(data);
                const linkQuery = decryptedCfUrl.split("?")[1];
                const parsedQuery = queryString.parse(linkQuery);

                // Check if expires parameter exists and is more than X (configurable) minutes before the expiration time
                if (parsedQuery['Key-Pair-Id'] !== config.aws_key_pair_id) {
                    res.status(403).send("Key Pair Id corrupted");
                    return;
                } else if (
                    !parsedQuery.Expires ||
                    !moment(parseInt(parsedQuery.Expires, 10) * 1000)
                        .subtract(config.aws_expire_timeout_padding, 'minutes')
                        .isAfter(moment())
                ) {
                    res.status(403).send("Download link expired");
                    return;
                }

                res.status(200).send(decryptedCfUrl);
            } catch (err) {
                res.status(400).send(err);
            }
        });

        server.get("*", (req, res) => {
            return handle(req, res)
        });

        const port = config.port;
        server.listen(port, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:" + port);
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
