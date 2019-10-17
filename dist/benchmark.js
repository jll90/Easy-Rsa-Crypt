"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_rsa_1 = __importDefault(require("node-rsa"));
// const timeProcess = (lambda: () => any) => {
// 	const start = process.hrtime.bigint();
// 	lambda();
// };
//
// const lambda1 = setTimeout(() => console.log('500ms'), 500);
//
//
// timeProcess(lambda1);
const lambda = () => { };
const key = (bits) => {
    new node_rsa_1.default({ b: bits });
};
const key512 = new node_rsa_1.default({ b: 512 });
const key1024 = new node_rsa_1.default({ b: 1024 });
const key2048 = new node_rsa_1.default({ b: 2048 });
const measureTime = (lambda, tagline) => {
    const start = process.hrtime.bigint();
    lambda();
    const end = process.hrtime.bigint();
    console.log(`${tagline} took ${(end - start) / 1000000n} ms`);
};
const encrypt = (key, data) => {
};
console.log('Generatig a key takes...');
measureTime(lambda, 'empty fun');
measureTime(() => key(512), '512b');
measureTime(() => key(1024), '1024b');
measureTime(() => key(2048), '2048b');
// measureTime(() => key(4096), '4096b');
