// const { ethers } = require("ethers");

// const { Contract } = require("ethers");


// const ADDR = "…";   // your contract address
// const ABI = […];    // your contract ABI
const UtilityContract = artifacts.require('UtilityContract.sol');

const ADDRESS = "0x300781177745ec186Fdf200395589ecFD1Ec4DCb"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"0x1c5A6FD9441EAA95719Ef35C8dd7487163934B20",
	"0x5B9Eb95b8E86Acc9a905C901EEFDC88b5d7319dA",
];

contract('UtilityContract', ()=> {
	it('getBalances', async ()=> {
		const utilityContract = await UtilityContract.new();
		const output = await utilityContract.getBalances(ADDRESS, TOKENS);
		console.log(output);
	});
});
// // you can use your own RPC provider url (no need to deploy to mainnet)
// const provider = ethers.providers.getDefaultProvider();

// const test = async () => {
// 	// const contract = new ethers.Contract(ADDR, ABI, provider);

// 	const balances = await UtilityContract.getBalances(ADDRESS, TOKENS);

// 	return balances;
// };

// test().then(console.log);