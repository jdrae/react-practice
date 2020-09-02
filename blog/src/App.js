import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import React, {Component} from 'react';

import {Home, Test, Head} from './inc'

class App extends Component{
    render(){
        return(
            <div className = 'App'>
                <Head/>
            </div>
        );
    }
}

export default App;