const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const mailer = require("./utils/mailer");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.use(bodyParser.json());

        server.post("/api/contact", (req, res) => {
            const { email, name, subject, message } = req.body;
            try {
                mailer({ email, name, subject, message });
                res.send("success");
            } catch (err) {
                res.send(err)
            }
        });

        server.post("/api/download", (req, res) => {
            const { email, name } = req.body;
            res.send("success");
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
