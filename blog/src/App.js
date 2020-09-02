import React, {Component} from 'react';

import {Head} from './inc'
import {Main} from './page'

class App extends Component{
    render(){
        return(
            <div className = 'App'>
                <div>
                    <Head/>
                </div>
                <div>
                    <Main />
                </div>
            </div>
        );
    }
}

export default App;