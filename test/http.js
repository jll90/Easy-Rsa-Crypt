const http = require('http');
const { Client, Server } = require('../dist');
const path = require('path');
const assert = require('assert');

const pubKey = Server.generatePublicKey();
const PORT = 3000;
const MESSAGE = "my secret string";

const server = http.createServer((req, res) => {

  let body = [];

  res.writeHead(200, { 'Content-Type': 'text/plain'});
  if (req.url === path.normalize("/pubkey")){
    console.log('Sending pubkey');
    res.end(pubKey);
  }
  if (req.url === path.normalize("/verify")){
    console.log('Verify');
    req.on('error', (err) => {
      console.error(err);
    }).on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      const { crypt } = JSON.parse(body);
      const decrypted = Server.decrypt(crypt);
      assert.ok(decrypted === MESSAGE, 'Decrypted successfully');
      console.log(decrypted === MESSAGE ? 'Message matches' : 'Error decrypting message');
      res.end(decrypted);
      server.close();
    });
  }
});

server.listen(PORT);
console.log('server is listening on port ' + PORT);

const sendEncryptedData = (crypt) => {
  req = http.request({
    host: 'localhost',
    port: PORT,
    path: '/verify',
    agent: false,
    method: "POST"
  });

  const jsonStr = JSON.stringify({
    crypt,
  });

  req.write(jsonStr);
  req.end();
};

(async () => {
  let clientPubKey;

  http.get({
    hostname: 'localhost',
    port: PORT,
    path: '/pubkey',
    agent: false
  }, (res) => {
    var data = '';
    res.on('data', d => {
      data += d
    });
    res.on("end", (hello) => {
      clientPubKey = data;
      const encrypted = Client.encrypt(clientPubKey, MESSAGE);
      sendEncryptedData(encrypted);
    });
  })

})();

