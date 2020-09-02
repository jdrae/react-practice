import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import { List, Write } from './index.js'; 
import { Right_Write } from './right/index.js';
import './main.css';

class main extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='Mains'>
                <div id='Mains-left'>
                    <h3> Left Side </h3>
                </div>
    
                <div>
                    <h2> This is Main layout </h2>
                    <Route path='/' component={List} exact/>
                    <Route path='/write' component={Write} />
                </div>
    
                <div id='Mains-right'>
                    <Route path='/write' component={Right_Write} />
                </div>
          </div>
        );
    }
}

export default main;