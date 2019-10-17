import NodeRSA from 'node-rsa';

export const encrypt = (publicKey: string, data: string): string | boolean => {
	let frontKey = null;
	try {
		frontKey = new NodeRSA(publicKey);
	} catch (e){
    return null;
	}
	return frontKey.encrypt(data, 'base64');
};
