import {decrypt, generatePublicKey} from "./server";
import {encrypt} from "./client";

export const Server = {
	generatePublicKey: generatePublicKey,
	decrypt: decrypt
};

export const Client = {
	encrypt: encrypt
};
