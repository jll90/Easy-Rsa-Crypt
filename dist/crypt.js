"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_rsa_1 = __importDefault(require("node-rsa"));
const generatePublicKey = () => {
    const key = new node_rsa_1.default();
    return key.exportKey('pkcs8-public-pem');
};
const encrypt = () => {
};
const decrypt = () => {
};
