import {decrypt, generatePublicKey, setFetchKeyFn, setKey} from "./server";
import {encrypt} from "./client";

export const Server = {
	generatePublicKey: generatePublicKey,
	decrypt: decrypt,
	setKey: setKey,
	setFetchKeyFn: setFetchKeyFn
};

export const Client = {
	encrypt: encrypt
};
