import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      host: '',
      name: '',
      list: [],
      update: false
    }
  }

  componentDidMount(){
    this._getHost();
    this._getData();
  }

  _dbTest = async() =>{
    const res = await axios.get('/api/test');
    console.log(res.data)
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({host: res.data.host})
  }

  _addData = async(e) => {
    const {name} = this.state;
    e.preventDefault();

    const res = await axios('/add/data',{
      method: 'POST',
      data: {'data':name}, //서버로 data 를 전송 -> req.body.data 로 받음
      headers: new Headers()
    })

    if(res.data!='') { //not working -> how to prevent null value?
      alert('데이터를 추가했습니다.');
      return window.location.reload();
    }
  }

  _nameUpdate(e){
    this.setState({name:e.target.value})
  }

  _getData = async () =>{
    const res = await axios.get('/get/data');
    if(res.data[0] === undefined){
      let cover = [];
      cover.push(res.data);
      return this.setState({list :cover})
    }
    this.setState({list:res.data});
  }

  render(){
    const { list } = this.state;

    return(
      <div className ='App'>
        {/* 클라이언트-서버 연동이 안될 경우 Blog 만 표시됨. */}
        <h3>{this.state.host} Blog</h3>
        <br />
        <form method='POST' onSubmit={this._addData}>
          <input type='text' maxLength='10' onChange={(e) => this._nameUpdate(e)}/>
          <input type='submit' value='Add' />
        </form>

        <div style={{ height : '250px', overflow : 'auto' }}>
            <h4 style={{ color : '#ababab'}}> Teachers List </h4>

              <div style={{ border : 'solid 1px black', width : '50%', marginLeft : '25%', textAlign : 'left' }}>
                <div style={{ display : 'grid', gridTemplateColumns : '32% 35% 30%', textAlign : 'center' }}>
                  <div> Number </div>
                  <div> Name </div>
                  <div> Other </div>
                </div>
              </div>

            {list.length !== 0
              ? list.map( (el, key) => {
                return(
                  <div key={key} style={{ display : 'grid', lineHeight : '40px', gridTemplateColumns : '32% 35%', width : '50%', marginLeft : '25%'}}>
                    <div> {el.id} </div>
                    <div> {el.name} </div>
                  </div>
                )
              })
            
              : null}
          </div>

      </div>
    )
  }

}

export default App;
