var BigNumber = require('bignumber.js');
export default function ether (n) {
 var b=web3.utils.toWei(n.toString(), 'ether')
 //var c=new  
 return new BigNumber(b);
}