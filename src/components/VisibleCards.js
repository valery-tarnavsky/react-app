import React, {Component} from "react";

import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        deckId: ownProps.match.params.deckId
    }
};

class VisibleCards extends Component {

    render() {

        return (
            <div className="deck">
               <p>{this.props.deckId}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps)(VisibleCards);