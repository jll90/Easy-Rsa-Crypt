"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_rsa_1 = __importDefault(require("node-rsa"));
const config_1 = require("../config");
let key = null;
let fetchKeyFn;
exports.setFetchKeyFn = (fn) => {
    fetchKeyFn = fn;
};
exports.setKey = (keyStr) => {
    key = new node_rsa_1.default(keyStr);
};
const getKey = () => {
    if (key) {
        return key;
    }
    else {
        key = new node_rsa_1.default(fetchKeyFn());
        return key;
    }
};
exports.decrypt = (data) => {
    try {
        return getKey().decrypt(data, 'utf8');
    }
    catch (e) {
        return null;
    }
};
exports.generatePublicKey = () => {
    return getKey().exportKey(config_1.KEY_EXPORT_CONFIG);
};
