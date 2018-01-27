import React from 'react';
import Web3 from 'web3';

import BalanceInfo from './BalanceInfo.jsx';

export default class BalanceDetails extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            web3: web3,
            balance: 0
        }
    }

    componentDidUpdate () {
        var _app = this;

        var balance = _app.getBalance(_app.props.address);
        balance = balance.then(function(result) {
            // Divide by 10000 to get correct ether amount
            _app.setState({balance: result["c"][0]/10000});
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

    render() {
        return (
            <div>
                <BalanceInfo balance={this.state.balance} />
            </div>
        )
    }
}