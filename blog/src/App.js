import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      host: '',
    }
  }

  componentDidMount(){
    this._getHost();
  }

  _getHost = async() => {
    const res = await Axios.get('/api/host');
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
