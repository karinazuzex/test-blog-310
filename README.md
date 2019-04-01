# memuweb-www
www.memurai.com website


Designs are available at https://drive.google.com/drive/folders/1u5qMwHY3eA9h1R43YGxg406Z882NSan7?usp=sharing

**Documentation for development process, TBD**

## How to use

### Setup

Clone repository to your local PC:

**LOCAL_DIRECTORY_NAME** - name of directory on your local PC

Via HTTPS: `git clone https://github.com/janeasystems/memuweb-www.git LOCAL_DIRECTORY_NAME`

Via SSH: `git clone git@github.com:janeasystems/memuweb-www.git LOCAL_DIRECTORY_NAME`

Go to directory and install dependencies:

```bash
cd LOCAL_DIRECTORY_NAME
npm install
```

Then, **for dev mode** run `npm run dev` and go to `http://localhost:3000`. To use another port, you can run
`npm run dev -- -p <your port here>`.

For production run consistently: 

```bash
npm run build
npm run start
```

## Technical characteristics

### Mailing

Mailing functions are performed via [nodemailer](https://nodemailer.com/about/)

### Download flow

[Amazon Cloudfront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) used as file
storage. Signing performed using [aws-cloudfront-sign](https://www.npmjs.com/package/aws-cloudfront-sign)
library.

Signed link is encrypted with **aes-256-cbc** algorithm using unique key.

This encrypted link is send to user as a key parameter into url query, where host is website host specified as `env`
paramenter.

Link lead to `/download` page, where url is being decrypted on visit with api call to server.

### Environment variables

- **smtp_server** - smtp server for nodemailer
- **smtp_port** - smtp port for nodemailer
- **smtp_username** - smtp username for nodemailer
- **smtp_password** - smtp password for nodemailer
- **aws_key_pair_id** - key pair ID for AWS
- **aws_private_key_path** - path to private key file for AWS
- **aws_file_path** - path to file on Amazon Cloudfront server
- **crypto_key** - key for data encryption/decryption
- **memurai_base_url** - website host, used for creation of download link

## TODOs, proposals and open quetions

- Add kind of user auth to restrict access to backend api, so only client would be able to perform requests
- Add captcha to all forms
- Add PP checkboxes
- Add cookiebot styling after load on live server
- Add slider with reviews to section
- Finalize in-app dev architecture
- Favicon, meta, titles, descriptions, etc. (head)
- Beautify/style mails ???
... TBD
