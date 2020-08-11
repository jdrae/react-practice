import React, {Component} from 'react';

class Control extends Component{
    render(){ 
      return (
        <ul>
          <li><a href ="/create" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('create');
          }.bind(this)}>create</a></li>
          <li><a href ="/update" onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('update');
          }.bind(this)}>update</a></li>
          {/* delete 는 link 를 쓰지 않고 button 으로 기능 */}
          <li><input onClick={function(e){
            e.preventDefault();
            this.props.onChangeMode('delete');
          }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
  }

  export default Control;