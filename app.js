const os = require('os');
const fs = require("fs");
const path = require('path');
const http = require('http')
const express = require('express');

const app = express();
const port = 4000;
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, './')));
app.use((req, res) => {
  res.sendStatus(404);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error(reason);
  process.exit(1);
});

server.listen(port, () => {
  const ifacesObj = {ipv4: [], ipv6: []};
  const interfaces = os.networkInterfaces();
  for(let dev in interfaces) interfaces[dev].forEach((item) => {
    if(!item.internal) ifacesObj[item.family.toLowerCase()].push({name:dev, address:item.address});
  });
  const ipList = ifacesObj.ipv4.map(e => {return e.address});
  ipList.unshift('localhost')
  console.log("Listening at:");
  for(let i = 0; i < ipList.length; i++) console.log("http://" + ipList[i] + ":" + port);
});
