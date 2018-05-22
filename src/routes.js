import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import App from './containers/App';
import VisibleCards from './components/VisibleCards';
export default () => {
    return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={App}/>
                    <Route path='/deck/:deckId' component={VisibleCards}/>
                </div>
            </BrowserRouter>
        )
}