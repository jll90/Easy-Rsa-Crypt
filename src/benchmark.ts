import NodeRSA from 'node-rsa';

// const timeProcess = (lambda: () => any) => {
// 	const start = process.hrtime.bigint();
// 	lambda();
// };
//
// const lambda1 = setTimeout(() => console.log('500ms'), 500);
//
//
// timeProcess(lambda1);

const lambda = () => {};

const key = (bits: number) => {
	new NodeRSA({b: bits});
};

const key512 = new NodeRSA({b: 512});
const key1024 = new NodeRSA({b: 1024});
const key2048 = new NodeRSA({b: 2048});

const measureTime =  (lambda: () => any, tagline: string) => {

	const start = process.hrtime.bigint();
	lambda();
	const end = process.hrtime.bigint();
	console.log(`${tagline} took ${(end - start)/1000000n} ms`);

};

const encrypt = (key: any, data: any) => {

};

console.log('Generatig a key takes...');

measureTime(lambda, 'empty fun');
measureTime(() => key(512), '512b');
measureTime(() => key(1024), '1024b');
measureTime(() => key(2048), '2048b');
// measureTime(() => key(4096), '4096b');
