import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import React, {Component} from 'react';

import {Home, Test} from './inc'

class App extends Component{
    render(){
        return(
            <div className = 'App'>
                <Route path = "/" component = {Home} exact/>

                <Switch>
                    <Route path = "/test/:data" component ={Test}/>
                    <Route path = "/test" component ={Test}/>
                </Switch>
                {/* Link 는 BrowserRouter 안에서만. 같은 path 의 Route 태그 있어야 */}
                <ul>
                    <li><Link to ='/'>Home</Link></li> 
                    <li><Link to ='/test'>Test</Link></li>
                </ul>
            </div>
        );
    }
}

export default App;