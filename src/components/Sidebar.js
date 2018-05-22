import React, {Component} from "react";
import ReactDOM from "react-dom"
import { Link } from 'react-router-dom';
import {addDeck, hideAddDeck, showAddDeck} from "../actions";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        decks : state.decks,
        addingDeck : state.addingDeck
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addDeck     : (name) => dispatch(addDeck(name)),
        showAddDeck : () => dispatch(showAddDeck()),
        hideAddDeck : () => dispatch(hideAddDeck())
    }
};

class Sidebar extends Component {
    constructor(props){
        super(props);
    }

    componentDidUpdate(){
        let $input = ReactDOM.findDOMNode(this.refs.add);
        if($input) { $input.focus() }
    }

    createDeck = (e) => {
        if(e.which !== 13){return}
        let inputValue = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(inputValue);
        this.props.hideAddDeck();
    };

    render() {
        return (
            <div className="sidebar">
                <div className="decks">
                    <h2>All Decks</h2>
                    <button onClick={ e => this.props.showAddDeck()}>Add new deck</button>
                    <ul className="decks-list">
                        {
                            this.props.decks.map((deck, index) => {
                                return <li className="decks-list__item" key={index}><Link to={`/deck/${deck.id}`}>{deck.name}</Link></li>;
                            })
                        }
                    </ul>
                    {this.props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);