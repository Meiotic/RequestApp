import React from 'react';

import '../styles/BalanceInfo.css';
import BalanceCard from './BalanceCard.jsx';

export default class BalanceInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-sm-3 col-sm-offset-1">
                <div className="main-balance">
                    <div className="panel panel-default">
                        <div className="panel-heading">Balance Info</div>
                        <div className="panel-body">
                            <BalanceCard icon="fa fa-balance-scale fa-2x" cardName="Balance" cardBalance={this.props.balance + " ETH"} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}