"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_rsa_1 = __importDefault(require("node-rsa"));
const key = new node_rsa_1.default({ b: 512 });
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
