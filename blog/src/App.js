import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      host: '',
      test: '',
    }
  }

  componentDidMount(){
    this._dbTest();
    this._getHost();
  }

  _dbTest = async() =>{
    const res = await axios.get('/api/test');
    console.log(res.data)
  }

  _getHost = async() => {
    const res = await axios.get('/api/host');
    this.setState({host: res.data.host})
  }

  render(){
    return(
      <div className ='App'>
        {/* 클라이언트-서버 연동이 안될 경우 Blog 만 표시됨. */}
        <h3>{this.state.host} Blog</h3>
      </div>
    )
  }

}

export default App;
