const { generatePublicKey } = require('../dist/server');
const { encrypt } = require('../dist/client');
const { decrypt } = require('../dist/server');

const assert = require('assert');
const NodeRSA = require('node-rsa');
const { KEY_EXPORT_CONFIG } = require('../config');

const testKey = new NodeRSA({b: 512});
const pubKey = testKey.exportKey(KEY_EXPORT_CONFIG);

assert.ok(
  encrypt(pubKey, "hello"),
  "encrypt/2 returns encrypted data with valid public key"
  );

assert.ok(
  encrypt("fjklfadsl", "fail") === null,
  "encrypt/2 returns null when passed-in invalid public key"
);

const encryptedMessage = encrypt(generatePublicKey(), "hello");
assert.ok(
  decrypt(encryptedMessage),
  "decrypt/1 works"
);

assert.ok(
  decrypt("unencrypted message") === null,
  "decrypt/1 fails"
);

assert.ok(
  generatePublicKey(),
  "generatePublicKey/1 works"
);

const integrationTest = () => {
  const toEncrypt = "my secret message";
  const clientKey = generatePublicKey();
  const encryptedData = encrypt(clientKey, toEncrypt);
  const decryptedData = decrypt(encryptedData);

  assert.ok(toEncrypt === decryptedData);
};

integrationTest();
