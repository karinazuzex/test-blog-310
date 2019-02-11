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
