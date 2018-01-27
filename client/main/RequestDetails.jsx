import React from 'react';
import Web3 from 'web3';
import RequestNetwork from '@requestnetwork/request-network.js';

export default class RequestDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rn: new RequestNetwork(web3.currentProvider, 4),
            requestsAsPayee: [],
            requestsAsPayer: []
        }
    }

    componentDidUpdate() {
        var _app = this;

        var requests = _app.getRequests(_app.props.address);
        requests = requests.then(function(result) {
           _app.setState({requestsAsPayee: result["asPayee"]});
        });  
    }

    // Get Requests from Request Network associated with address
    async getRequests(address) {
        var result = await this.state.rn.requestCoreService.getRequestsByAddress(address);
        return result;
    }

    render() {
        const hasRequestsAsPayee = (typeof this.state.requestsAsPayee[0] !== 'undefined') ? true : false;
        const hasRequestsAsPayer = (typeof this.state.requestsAsPayer[0] !== 'undefined') ? true : false;

        return (
            <div>
                {this.state.requestsAsPayee.map(function(request) {
                    return (
                        <div>
                        {request.requestId}
                        </div>
                    )
                })}
            </div>
        )
    }
}