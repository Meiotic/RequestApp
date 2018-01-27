import RequestNetwork from '@requestnetwork/request-network.js';
import Web3 from 'web3';


Meteor.methods({

    async submitAddress(address) {
        var web3 = new Web3 (new Web3.providers.HttpProvider('https://rinkeby.infura.io/'));
        let requestNetwork = new RequestNetwork(web3.currentProvider, 4);

        console.log(web3.eth.accounts);

        results = await requestNetwork.requestCoreService.getRequestsByAddress(address);
        console.log(results["asPayee"][0]["requestId"]);
    }

});