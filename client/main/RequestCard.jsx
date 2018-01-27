import React from 'react';

import RequestNetwork from '@requestnetwork/request-network.js';

export default class RequestCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rn:  new RequestNetwork(web3.currentProvider, 4)
        }
    }

    componentDidMount() {
        var requestId = this.props.requestId;
    }

    render() {
        return (
            <div className="col-sm-7">
                <div className="panel panel-default">
                    <div className="panel-heading">Current Requests</div>
                    <div className="panel-body">
                        {this.props.requestId}
                    </div>
                </div>
            </div>
        )
    }
}