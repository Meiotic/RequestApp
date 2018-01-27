import React from 'react';

import '../styles/EthAddress.css';

export default class EthAddress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-10 col-sm-offset-1">
                <div className="alert-info main-address">
                    Current Metamask Address: {this.props.address}
                </div>
            </div>
        )
    }
}