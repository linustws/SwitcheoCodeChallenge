// const { ethers } = require("ethers");

// const { Contract } = require("ethers");


// const ADDR = "…";   // your contract address
// const ABI = […];    // your contract ABI

const ADDRESS = "0xF977814e90dA44bFA03b6295A0616a897441aceC"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x111111111117dC0aa78b770fA6A738034120C302",
	"0xC943c5320B9c18C153d1e2d12cC3074bebfb31A2",
];

// // you can use your own RPC provider url (no need to deploy to mainnet)
// const provider = ethers.providers.getDefaultProvider();

// const test = async () => {
// 	// const contract = new ethers.Contract(ADDR, ABI, provider);

// 	const balances = await UtilityContract.getBalances(ADDRESS, TOKENS);

// 	return balances;
// };
const UtilityContract = artifacts.require('UtilityContract.sol');
contract('UtilityContract', ()=> {
	it('getBalances', async ()=> {
		const utilityContract = await UtilityContract.new();
		const output = await utilityContract.getBalances(ADDRESS, TOKENS);
		console.log(output);
	});
});

// test().then(console.log);