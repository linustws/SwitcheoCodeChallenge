const UtilityContract = artifacts.require('UtilityContracts.sol')

module.exports = function (deployer) {
    deployer.deploy(UtilityContract);
}