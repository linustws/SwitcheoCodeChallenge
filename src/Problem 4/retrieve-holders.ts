import { ethers } from "ethers";

let minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

const tokenContractAddress = '0xc0ecb8499d8da2771abcbf4091db7f65158f1468';

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

let addresses = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430", "0x0020c5222a24e4a96b720c06b803fb8d34adc0af", "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"];
const contract = new ethers.Contract(tokenContractAddress, minABI, provider);

// Call a getter method
async function getHolderBalance() {
   Promise.all(addresses.map(address => contract.balanceOf(address))).then( // big number
        balances => {
          balances.forEach((balance, i) => console.log(addresses[i] + " " + balance.toNumber())); 
          }); 
}
getHolderBalance();