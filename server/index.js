const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const mailer = require("./utils/mailer");
const aws = require("./utils/aws");
const crypto = require("./utils/crypto");
const config = require("./config");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.json());

        server.post("/api/contact", async (req, res) => {
            const { email, name, subject, message } = req.body;
            try {
                await mailer.contact({ email, name, subject, message });
                res.send("success");
            } catch (err) {
                res.send(err)
            }
        });

        server.post("/api/request-download", async (req, res) => {
            const { email, name } = req.body;
            try {
                const response = await aws.getDownloadUrl();
                const encryptedCfUrl = crypto.encrypt(response.data);
                const url = `${config.memurai_base_url}/download?id=${encryptedCfUrl}`;
                await mailer.download({ name, email, url });
                res.send("success");
            } catch (err) {
                res.send(err)
            }
        });

        server.get("/download", async (req, res) => {
            try {
                const request = req.query.id;
                const decryptedCfUrl = crypto.decrypt(request);
                res.send(decryptedCfUrl);
            } catch (err) {
                res.send(err);
            };
        });

        server.get("*", (req, res) => {
            return handle(req, res)
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log("> Ready on http://localhost:3000");
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });
