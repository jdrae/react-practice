import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
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
        const id = this.state.id.trim();
        const password = this.state.password.trim();

        if(id === ""){
            return alert("아이디를 입력해주세요");
        }else if(password === ""){
            return alert('비밀번호를 입력해주세요');
        }

        const obj = {id: id, password: password}

        const res = await axios('/send/pw', {
            method: 'POST',
            data: obj,
            headers: new Headers()
        })

        if(res.data){
            console.log(res.data.msg);
            if(res.data.suc){
                this.props._login()
                this._closeModal()
            }  else{
                return alert('아이디 및 비밀번호가 일치하지 않습니다')
            }
        }
    }

    _logout = function(){
        this.props._logout()
        window.alert('로그아웃되었습니다.')
    }

    render(){
        const {login} = this.props;
        return(
            <div className='header_grid'>
                <div className='acenter'>
                    {login 
                    ? <h5> <Link to='/write'> 포스트 작성 </Link> </h5>
                    : null
                    }
                </div>
                <div className='acenter'>
                    <Route path ='/'/>
                    <Link className='link_tit' to = '/'>
                        <h3> Darae's Blog </h3>
                    </Link>
                </div>

                <div className='acenter'>
                    {login ? <h5 className="btn_cursor" onClick={()=>this._logout()}> 관리자 로그아웃 </h5> 
                    : <h5 className="btn_cursor" onClick={()=>this._openModal()}> 관리자 로그인 </h5>
                    }
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