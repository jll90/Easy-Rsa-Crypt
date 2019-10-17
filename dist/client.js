"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_rsa_1 = __importDefault(require("node-rsa"));
exports.encrypt = (publicKey, data) => {
    let frontKey = null;
    try {
        frontKey = new node_rsa_1.default(publicKey);
    }
    catch (e) {
        return null;
    }
    return frontKey.encrypt(data, 'base64');
};
