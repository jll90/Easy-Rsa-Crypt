declare type SetFetchFn = () => string | null;
export declare const setFetchKeyFn: (fn: SetFetchFn) => void;
export declare const setKey: (keyStr: string) => void;
export declare const decrypt: (data: string) => string;
export declare const generatePublicKey: () => string;
export {};
