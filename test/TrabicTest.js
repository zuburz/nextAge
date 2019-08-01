require('babel-register')();
 require('babel-polyfill');
const Trabic  = artifacts.require('Trabic')
const BigNumber = web3.BigNumber;

//require('chai').use(require('chai-bignumber')(BigNumber)).should();
let token;

contract('this is the trabic token test',accounts=>{
    const creater =accounts[0];
    beforeEach(async function(){
       //const _name='Trabic';
        //const _symbol='TRC';
        //const _decimal=18;
        token = await Trabic.new({from:creater});
    })

    it('name is correct',async function(){
        const testName=await token.name();
        assert.equal(testName,name,'the is not correct')   
     })
})