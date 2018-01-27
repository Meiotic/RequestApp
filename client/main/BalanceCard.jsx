import React from 'react';

import '../styles/BalanceCard.css';

export default class BalanceCard extends React.Component {
    render() {
        return (
            <div className="col-xs-12">
                <div className="icon-balance">
                    <i className={this.props.icon}></i> 
                </div>
                <div className="info-balance">
                    {this.props.cardName}: {this.props.cardBalance}
                </div>
            </div>
        )
    }
}