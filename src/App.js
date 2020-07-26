import React, {Component} from 'react';
import './App.css';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from  './components/Subject'

class App extends Component{
  constructor(props){
    super(props); //초기화
    this.state = {
      selected_content_id:2,
      mode: 'read',
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
      var i = 1;
      while(i<= this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title= data.title;
          _desc= data.desc;
        }
        i= i+1;
      }
    }
    return (
      // JSX 코드
      <div className = "App">
        <Subject 
        title= {this.state.subject.title}
        sub = {this.state.subject.sub}
        onChangePage = {function(){
          this.setState({mode:'welcome'})
        }.bind(this)}
        ></Subject>
        <TOC 
        data={this.state.contents}
        onChangePage = {function(id){
          this.setState({
            mode:'read',
            selected_content_id: Number(id) // string 으로 들어옴
          });
        }.bind(this)}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

