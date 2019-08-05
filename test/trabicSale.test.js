import ether from './helpers/ehers.js';
const BigNumber = web3.BigNumber;
const Trabic  = artifacts.require('Trabic')
const trabicSale = artifacts.require('trabicCrowdSale')
const Web3 = require('web3')
 

require('chai')
.use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();
contract('this is the trabic Crowdsale ',function([_,wallet,invester1,invester2]){
    beforeEach(async function(){
        this.name='Trabic';
        this.symbol='TRC';
        this.decimals=18;
        this.trabicToken=await Trabic.new(this.name,this.symbol,this.decimals);
        this.rate='500';
        this.wallet=wallet; 
        this.trabicCrowdSale=await trabicSale.new(this.rate,this.wallet,this.trabicToken.address)

        await this.trabicToken.transferOwnership(this.trabicCrowdSale.address)

    })
    it('track the trabic token',async function(){
        const tokenTrack=await this.trabicCrowdSale.token();
        tokenTrack.should.be.equal(this.trabicToken.address);
    })
    it('this is tracking of wallet address',async function(){
        const wallletAddress=await this.trabicCrowdSale.wallet();
        wallletAddress.should.equal(this.wallet)
    })
    it('this is tracking of rate ',async function(){
        const wallletAddress=await this.trabicCrowdSale.rate();
        wallletAddress.should.be.bignumber.equal(this.rate)
    })
    describe('this this test of accepting payments',function(){
        it('this is the issue of accepting payments',async function(){
            const value =ether(1);
            const purchaser=invester2;
            
            await this.trabicCrowdSale.sendTransaction({value:value,from:invester2}).should.be.fulfilled;
           // await this.trabicCrowdSale.buyToken(invester1,{value:value,from:purchaser}).should.be.fulfilled;

        })
    })
   
})