const { Server, Client } = require('../dist');

const assert = require('assert');
const NodeRSA = require('node-rsa');
const { KEY_EXPORT_CONFIG } = require('../config');

const testKey = new NodeRSA({b: 512});
const pubKey = testKey.exportKey(KEY_EXPORT_CONFIG);

assert.ok(
  Client.encrypt(pubKey, "hello"),
  "encrypt/2 returns encrypted data with valid public key"
  );

assert.ok(
  Client.encrypt("fjklfadsl", "fail") === null,
  "encrypt/2 returns null when passed-in invalid public key"
);

const encryptedMessage = Client.encrypt(Server.generatePublicKey(), "hello");
assert.ok(
  Server.decrypt(encryptedMessage),
  "decrypt/1 works"
);

assert.ok(
  Server.decrypt("unencrypted message") === null,
  "decrypt/1 fails"
);

assert.ok(
  Server.generatePublicKey(),
  "generatePublicKey/1 works"
);

const integrationTest = () => {
  const toEncrypt = "my secret message";
  const clientKey = Server.generatePublicKey();
  const encryptedData = Client.encrypt(clientKey, toEncrypt);
  const decryptedData = Server.decrypt(encryptedData);

  assert.ok(toEncrypt === decryptedData);
};

integrationTest();
