import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import { List, Write, View } from './index.js'; 
import { Right_Write } from './right/index.js';
import { Category } from './left/index.js'; 
import './main.css';

class main extends Component{
    constructor(props){
        super(props)
        this.state = {
            category: '',
            contents:"",
        }
    }

    _changeCategory = (target)=>{
        this.setState({category: target});
        sessionStorage.setItem('category', target);
    }

    _withProps = function (Component, props){
        return function(matchProps){
            return <Component {...props} {...matchProps}/>
        }
    }
    
    _getContents = (val) => {
        const contents = val.trim();
    
        this.setState({ contents : contents })
    }

    render(){
        const { _getContents } = this;
        const { contents } = this.state;

        const {_changeCategory} = this;
        const {category} = this.state;
        const {login} = this.props;
        return(
            <div className='Mains'>
                <div id='Mains-left'>
                    <Route path='/' 
                    render = {props => <Category _changeCategory={_changeCategory} login = {login}/> }
                    exact/>
                </div>
    
                <div>
                    <Route path='/' component={this._withProps(List, {category: category})} exact/>
                    <Route path='/write' component={this._withProps(Write, { 
                        _getContents : _getContents, 
                        contents : contents })} />
                    <Route path='/view/:data' component={View} />
                </div>
    
                <div id='Mains-right'>
                    <Route path='/write'
                        component={this._withProps(Right_Write, { contents : contents })} />
                </div>
          </div>
        );
    }
}

export default main;