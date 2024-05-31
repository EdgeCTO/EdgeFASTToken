const EdgeFASTToken = artifacts.require("EdgeFASTToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei("100000000", "ether"); // 1,000,000 tokens with 18 decimals
  deployer.deploy(EdgeFASTToken, initialSupply);
};