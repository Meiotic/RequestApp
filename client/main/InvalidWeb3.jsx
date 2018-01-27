import React from 'react';

export default class InvalidWeb3 extends React.Component {
    render() {
        return (
            <div className="col-md-10 col-md-offset-1">
                <div className="panel panel-info">
                    <div className="panel-heading">Invalid Metamask!</div>
                    <div className="panel-body">
                        <p>You must log into Metamask to continue!</p>
                    </div>
                </div>
            </div>
        )
    }
}