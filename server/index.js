const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const config = require("./config");
const mailer = require("./utils/mailer");
const aws = require("./utils/aws");
const crypto = require("./utils/crypto");
const wwwhisper = require('connect-wwwhisper');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.use(wwwhisper(false));
        server.use(bodyParser.json());

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
                const url = `${config.memurai_base_url}/download?key=${encryptedCfUrl}&id=${encryptedEmail}`;
                await mailer.download({ email, url });
                res.status(200).send("success");
            } catch (err) {
                res.status(400).send(err);
            }
        });

        server.post("/api/decrypt", async (req, res) => {
            try {
                const { data } = req.body;
                const decryptedCfUrl = crypto.decrypt(data);
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
