import React from "react";
import Header from './component/Header';
import Feed from './component/Feed';
import Profile from './component/Profile'
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className='App'>
                <Header/>
                <Route path='/' component={Feed} exact/>
                <Route path='/profile' component={Profile} exact/>
            </div>
        </Router>
    )
}

export default App;
