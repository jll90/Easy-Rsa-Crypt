export declare const Server: {
    generatePublicKey: () => string;
    decrypt: (data: string) => string;
    setKey: (keyStr: string) => void;
    setFetchKeyFn: (fn: () => string) => void;
};
export declare const Client: {
    encrypt: (publicKey: string, data: string) => string | boolean;
};
