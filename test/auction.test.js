let Auction = artifacts.require('./Auction.sol');

 

let auctionInstance;

 

contract('AuctionContract', function(accounts) {

  //accounts[0] is the default account

  describe('Contract deployment', function() {

    it('Contract deployment', function() {

      //Fetching the contract instance of our smart contract

      return Auction.deployed().then(function(instance) {

        //We save the instance in a global variable and all smart contract functions are called using this

        auctionInstance = instance;

        assert(

          auctionInstance !== undefined,

          'Auction contract should be defined'

        );

      });

    });

    it('Initial rule with corrected startingPrice and minimumStep', function() {

      //Fetching the rule of Auction

      return auctionInstance.rule().then(function(rule) {

        //We save the instance in a global variable and all smart contract functions are called using this

        assert(rule !== undefined, 'Rule should be defined');

 

        assert.equal(rule.startingPrice, 50, 'Starting price should be 50');

        assert.equal(rule.minimumStep, 5, 'Minimum step should be 5');

      });

    });

  });

});