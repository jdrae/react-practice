import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from  './components/Subject'

class App extends Component{
  constructor(props){
    super(props); //초기화
    this.state = {
      mode: 'welcome',
      subject: {title:'Recipe', sub: 'World Wide Recipe'},
      welcome: {title:"Welcome", desc: "Hello"},
      contents: [
        {id:1, title: 'Hwachae', desc:'Hwachae is summer desert'},
        {id:2, title: 'Bibimbap', desc:'Bibimbap is widely beloved main dish'},
        {id:3, title: 'Bulgogi', desc: 'Bulgogi is fried meat with sweet sauce'},
      ]
    }
  }
  // props 와 state 값이 바뀌면 render() 가 호출
  render(){ //클래스 안에 있는 함수는 function 붙지 않음
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title= this.state.welcome.title;
      _desc= this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title= this.state.contents[0].title;
      _desc= this.state.contents[0].desc;
    }
    return (
      // JSX 코드
      <div className = "App">
        <Subject 
        title= {this.state.subject.title}
        sub = {this.state.subject.sub}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

