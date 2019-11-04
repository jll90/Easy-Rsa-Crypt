"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const client_1 = require("./client");
exports.Server = {
    generatePublicKey: server_1.generatePublicKey,
    decrypt: server_1.decrypt,
    setKey: server_1.setKey,
    setFetchKeyFn: server_1.setFetchKeyFn
};
exports.Client = {
    encrypt: client_1.encrypt
};
