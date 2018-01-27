import React from 'react';
import Web3 from 'web3';

import BalanceDetails from './BalanceDetails.jsx';
import RequestDetails from './RequestDetails.jsx';
import EthAddress from './EthAddress.jsx';
import InvalidWeb3 from './InvalidWeb3.jsx';

export default class MainWrapper extends React.Component {
    constructor() {
        super();

        if(typeof web3 !== 'undefined') {
            this.state = {
                web3: web3,
                connected: false,
                address: ""
            };
        }
    }

    componentDidMount() {
        //Make sure client has a valid web3 client
        const connected = (typeof web3 !== "undefined") ? true : false
        this.setState({connected: connected});

        var _app = this;

        if (connected) {
            var accounts = this.getAccounts();
            accounts = accounts.then(function(result) {
                // result[0] returns the first address in metamask wallet
                _app.setState({address: result[0]});
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

    render() {
        return (
            <div>
            {this.state.connected ?
                (
                    <div className="main-content">
                        <EthAddress address={this.state.address} />
                        <BalanceDetails address={this.state.address} />
                        <RequestDetails address={this.state.address} />
                    </div>
                ) :
                (
                    <InvalidWeb3 />
                )}
            </div>
        )
    }       
}