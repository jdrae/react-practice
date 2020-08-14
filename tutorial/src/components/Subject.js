import React, {Component} from 'react';

class Subject extends Component{
    render(){ 
      return (
        <header>
          <h1><a href='/' onClick={function(e){ //이벤트 객체를 받는다
            e.preventDefault(); // a 태그의 기본 역할을 막는다.
            // debugger; //chrome 에 쓰이는 중단점
            this.props.onChangePage(); //App.js 에서 전달됨
          }.bind(this)}>{this.props.title}</a></h1>
          <p>{this.props.sub}</p>
        </header>
      );
    }
  }

  export default Subject;