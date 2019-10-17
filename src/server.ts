import NodeRSA from 'node-rsa';
import {readFileSync} from "fs";
import * as path from "path";
import { KEY_EXPORT_CONFIG } from "../config";

let key = null;

const getKey = () => {
	if (key){
		return key;
	} else {
		const fs = readFileSync(path.resolve(__dirname, '../config/mykey.pem'));
		key = new NodeRSA(Buffer.from(fs));
		return key;
	}
};

export const decrypt = (data: string): string | null => {
	try {
		return getKey().decrypt(data, 'utf8');
	}	catch(e) {
		return null;
	}
};

export const generatePublicKey = (): string => {
	return getKey().exportKey(KEY_EXPORT_CONFIG);
};

