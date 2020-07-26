import React, {Component} from 'react';

class Subject extends Component{
    render(){ 
      return (
        <header>
          <h1><a href='/' onClick={function(e){ //이벤트 객체를 받는다
            e.preventDefault(); // a 태그의 기본 역할을 막는다.
          }}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;