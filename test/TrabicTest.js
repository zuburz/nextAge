//require('babel-register')();
 //require('babel-polyfill');
const Trabic  = artifacts.require('Trabic')
const BigNumber = web3.BigNumber;
require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();


//require('chai').use(require('chai-bignumber')(BigNumber)).should();
let token;

contract('this is the trabic token test',accounts=>{
    const creater =accounts[0];
    const _name='Trabic';
    const _symbol='TRC';
    const _decimal=18;
    beforeEach(async function(){
       
        token = await Trabic.new(_name,_symbol,_decimal);
    })

    it('name is correct',async function(){
        const testName=await token.name(_);
        assert.equal(testName,'trabic','the is not correct')   
     })
     it('the symbole of token is correct',async function(){
         const tokenSymbol=await token.symbol();
         //console.log(tokenSymbol+"my work is good")
        // tokenSymbol.should.equal('TRC')
       //  assert.equal(tokenSymbol,'TRC','this is not correct symbol')
         assert.equal(tokenSymbol,'TRC','this token is  symbol is ')
     })
     it('this should dedcribe about the decimels value',async function(){
         const decimelsOrder=await token.decimals();
         decimelsOrder.should.be.bignumber.equal(_decimal)
     })
})