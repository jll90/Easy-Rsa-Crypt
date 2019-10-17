import NodeRSA from 'node-rsa';
const key = new NodeRSA({b: 512});

const json = {
	a: "a",
	b: "b"
};

const str = JSON.stringify(json);
const encrypted = key.encrypt(str, 'base64');
console.log('encrypted: ', encrypted);
const decrypted = key.decrypt(encrypted, 'utf8');
console.log(key.exportKey('pkcs8-public-pem'));
console.log('decrypted: ', decrypted);
console.log('deserialized: ', JSON.parse(decrypted));
