import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Modal from 'react-awesome-modal';
import axios from 'axios';
import '../App.css';

class header extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            id: "",
            password: "",
        }
    }

    _openModal = function(){
        this.setState({
            visible: true
        });
    }

    _closeModal = function(){
        this.setState({
            visible: false
        });
    }

    _changeID = function(){
        const id = document.getElementsByName('id')[0].value;
        this.setState({
            id: id
        });
    }

    _changePW = function(){
        const pw = document.getElementsByName('password')[0].value;
        this.setState({
            password: pw
        });
    }

    _selectUserData = async (e) => {
        const res = await axios('/send/pw', {
            method: 'POST',
            data: this.state,
            headers: new Headers()
        })

        if(res.data){
            console.log(res.data)
        }
    }

    render(){
        return(
            <div className='header_grid'>
                <div></div>
                <div className='acenter'>
                    <Route path ='/'/>
                    <Link className='link_tit' to = '/'>
                        <h3> Darae's Blog </h3>
                    </Link>
                </div>

                <div className='acenter'>
                    <h5 onClick={()=>this._openModal()}> 관리자 로그인 </h5>
                    <Modal visible = {this.state.visible} 
                            width = "400" height = "350" 
                            effect="fadeInDown" 
                            onClickAway={()=>this._closeModal()}>
                        <div>
                            <h4 className='acenter login_tit'> 관리자 로그인 </h4>
                            <form>
                            <div className='login_div'>
                            <div className='login_input_div'>
                                <p> ID </p>
                                <input type='text' name='id' onChange={()=>this._changeID()}/>
                            </div>

                            <div className='login_input_div' style={{ 'marginTop' : '40px'}}>
                                <p> Password </p>
                                <input type='password' name='password' onChange={()=>this._changePW()}/>
                            </div>

                            <div className='submit_div'>
                                <div> <input type='button' value='로그인' onClick = {()=>this._selectUserData()}/> </div>
                                <div> <input type='button' value='취소' onClick={() => this._closeModal()}/> </div>
                            </div>
                            </div>
                            </form>
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default header;