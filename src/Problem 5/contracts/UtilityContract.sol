// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import {IERC20} from './IERC20.sol';

// interface IERC20 {
//     function balanceOf(address) external view returns (uint256);
// }

contract UtilityContract {
    function getBalances(address walletAddress, address[] memory tokenAddresses) public view returns (address[] memory, uint[] memory) {
        uint len = tokenAddresses.length;
        uint[] memory balances = new uint256[](len);
        for (uint i=0; i<len; i++) {
            balances[i] = IERC20(tokenAddresses[i]).balanceOf(address(walletAddress));
        }
        return (tokenAddresses, balances);
	}
}
