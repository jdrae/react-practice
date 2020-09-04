import React, {Component} from 'react';

import {Head} from './inc'
import {Main} from './page'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            login : false,
            admin : 'N',
            user_ip : "",
          }
    }

    componentDidMount() {
        if(sessionStorage.login && sessionStorage.IP) {
            this.setState({ login : sessionStorage.login,  
                admin : 'Y', //incorrect
                user_ip : sessionStorage.IP
            })
          }
    }
    _login = (data) => {
        sessionStorage.setItem('login', JSON.stringify(data.suc))
        sessionStorage.setItem('IP', JSON.stringify(data.ip))
        this.setState({ login : sessionStorage.login,  
                        admin : 'Y',//incorrect
                        user_ip : sessionStorage.IP
        })
    }
    
    _logout = () => {
        this.setState({ login : false, admin : false, user_ip : "" })

        sessionStorage.removeItem('login')
        sessionStorage.removeItem('IP')
    }
    render() {
      const { login, admin, user_ip } = this.state;
      const { _login, _logout } = this;
      return(
      <div>
        <div>
          <Head 
            login = {login}
            admin = {admin}
            _login = {_login}
            _logout = {_logout}
          />
        </div>
  
        <div>
          <Main
            admin = {admin}
            login = {login}
          />
        </div>
      </div>
      )
    }
  }
  
  export default App;