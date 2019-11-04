import NodeRSA from 'node-rsa';
import {KEY_EXPORT_CONFIG} from "../config";

type SetFetchFn = () => string | null

let key = null;
let fetchKeyFn:  SetFetchFn;

export const setFetchKeyFn = (fn: SetFetchFn) => {
	fetchKeyFn = fn
};

export const setKey = (keyStr: string) => {
	key = new NodeRSA(keyStr);
};

const getKey = () => {
	if (key){
		return key;
	} else {
		key = new NodeRSA(fetchKeyFn());
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

