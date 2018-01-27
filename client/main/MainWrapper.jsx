import React from 'react';
import Web3 from 'web3';
import RequestNetwork from '@requestnetwork/request-network.js';

import QuickDetails from './QuickDetails.jsx';
import EthAddress from './EthAddress.jsx';
import InvalidWeb3 from './InvalidWeb3.jsx';
import BalanceInfo from './BalanceInfo.jsx';
import RequestCard from './RequestCard.jsx';

export default class MainWrapper extends React.Component {
    constructor() {
        super();

        if(typeof web3 !== 'undefined') {
            this.state = {
                rn: new RequestNetwork(web3.currentProvider, 4),
                web3: web3,
                address: "",
                balance: 0,
                requests: {}
            };
        }

        //this.getAccounts = this.getAccounts.bind(this);
    }

    componentDidMount() {
        //Make sure client has a valid web3 client
        const connected = (typeof web3 !== "undefined") ? true : false
        var _app = this;

        if (connected) {

            var accounts = this.getAccounts();
            accounts = accounts.then(function(result) {
                // result[0] returns the first address in metamask wallet
                _app.setState({address: result[0]});

                var balance = _app.getBalance(_app.state.address);
                balance = balance.then(function(result) {
                    // Divide by 10000 to get correct ether amount
                    _app.setState({balance: result["c"][0]/10000});
                });

                var requests = _app.getRequests(_app.state.address);
                requests = requests.then(function(result) {
                   _app.setState({requests: result["asPayee"]});
                });  
            });
        }
    }

    // Get Eth account tied to web3 client
    getAccounts() {
        var _app = this;

        return new Promise(function (resolve, reject) {
            _app.state.web3.eth.getAccounts(function (error, result) {
                resolve(result);
            });
        });
    }

    // Get Eth balance
    getBalance(address) {
        var _app = this;

        return new Promise(function (resolve, reject) {
            _app.state.web3.eth.getBalance(address, function(error, result) {
                    resolve(result);
            });
        });
    }

    // Get Requests from Request Network associated with address
    async getRequests(address) {
        var result = await this.state.rn.requestCoreService.getRequestsByAddress(address);
        return result;
    }

    render() {
        //Make sure client has a valid web3 client
        const connected = (typeof web3 !== "undefined") ? true : false

        if(connected){
            return (
                <div className="main-content">
                    <EthAddress address={this.state.address} />
                    <BalanceInfo balance={this.state.balance} />
                    {console.log(this.state.requests)}
                    <QuickDetails />
                </div>
            )
        }
        else {
            return (
                <InvalidWeb3 />
            )
        }
       
    }
}