"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_rsa_1 = __importDefault(require("node-rsa"));
const fs_1 = require("fs");
const path = __importStar(require("path"));
const config_1 = require("../config");
let key = null;
const getKey = () => {
    if (key) {
        return key;
    }
    else {
        const fs = fs_1.readFileSync(path.resolve(__dirname, '../config/mykey.pem'));
        key = new node_rsa_1.default(Buffer.from(fs));
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
