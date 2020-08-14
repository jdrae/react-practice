blog tutorial from [https://blog.naver.com/sejun3278/](https://blog.naver.com/sejun3278/)

### How to start 

```
cd server
node server.js

cd blog
npm start
```

* Press `f12` and go `Network` tab to check the `host` file is in correct status. (Request URL: `http://localhost:3000/api/host`)


### To start server and client at once

1. install modules

```
npm install nodemon -g
npm install nodemon concurrently --save-dev
```

2. modify `package.json` file

```
  "scripts": {
    "server": "nodemon server/server.js",
    "dev": "concurrently \"nodemon server/server.js\" \"node scripts/start.js\"",
```


3. run

```
yarn dev
```