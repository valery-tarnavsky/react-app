import React, {Component} from "react";
import ReactDOM from "react-dom"

class Sidebar extends Component {
    constructor(props){
        super(props);
        console.log(props);
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
        console.log(this.props.addingDeck);
        return (
            <div className="sidebar">
                <div className="decks">
                    <h2>All Decks</h2>
                    <button onClick={e => this.props.showAddDeck()}>Add new deck</button>
                    <ul className="decks-list">
                        {
                            this.props.decks.map((deck, index) => {
                                return <li className="decks-list__item" key={index}> {deck.name}</li>;
                            })
                        }
                    </ul>
                    {this.props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
                </div>
            </div>
        );
    }
}

export default Sidebar;