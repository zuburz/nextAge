var BigNumber = require('bignumber.js');
export default function ether (a) {
  
 var b =web3.utils.toWei(a.toString(), 'ether')

 // console.log("Value of A"+a);
      var a=new BigNumber(b)
    return a;
  }