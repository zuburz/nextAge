pragma solidity ^0.5.0;
import "../node_modules/openzeppelin-solidity/contracts/crowdsale/Crowdsale.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

import "../node_modules/openzeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
//import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract trabicCrowdSale is Crowdsale,MintedCrowdsale{
     constructor(uint256 _rate,address payable _wallet,ERC20 _token)Crowdsale(_rate,_wallet,_token) public{

    }
}
 