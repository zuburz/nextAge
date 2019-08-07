import ether from './helpers/ehers.js';
import { AssertionError } from 'assert';
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
        const wei=1000000000000000;
        this.cap=10*wei;
        this.rate=500;
        this.wallet=wallet; 
        this.trabicCrowdSale=await trabicSale.new(500,this.wallet,this.trabicToken.address,this.cap.toString())

        await this.trabicToken.transferOwnership(this.trabicCrowdSale.address)

    });
    it('track the trabic token',async function(){
        const tokenTrack=await this.trabicCrowdSale.token();
        tokenTrack.should.be.equal(this.trabicToken.address);
    })
    it('this is tracking of wallet address',async function(){
        const wallletAddress=await this.trabicCrowdSale.wallet();
        wallletAddress.should.equal(this.wallet)
    })

   describe('this is testing weather rate is correct',function(){

    it('this is tracking of rate ',async function(){
        //const value =ether(1);
        const wallletAddress=await this.trabicCrowdSale.rate();
        //wallletAddress.should.be.bignumber.equal(value)
        assert.equal(wallletAddress,this.rate,'both rate are equals') 
    })

   })



    describe('this this test of accepting payments',function(){
        it('this is the issue of accepting payments',async function(){
            const value =ether(1);
            const purchaser=invester2;
            
            await this.trabicCrowdSale.sendTransaction({value:value,from:invester2}).should.be.fulfilled;
           await this.trabicCrowdSale.buyToken(invester1,{value:value,from:purchaser}).should.be.fulfilled;

        })
    })
    describe('this should tell is the cap value',function(){
        it('this is the cap test',async function(){
         const capValue=await this.trabicCrowdSale.cap();
         //capValue.should.be.bignumber.equal(this.cap);
         assert.equal(capValue,this.cap,'this the cap value is good')
        })
    })
   
})