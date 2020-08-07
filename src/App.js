import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from  './components/Subject'
import Measure from  './components/Measure'
import './App.css'

export default class App extends Component{
    constructor(props){
        super(props); //초기화
        this.state = {
          selected_content_id:2,
          mode: 'read',
          subject: {title:'DaRecipe', sub: 'World Wide Recipe'},
          welcome: {title:"Welcome", desc: "Hello"},
          contents: [
            {id:1, title: 'Hwachae', desc:'Hwachae is summer desert'},
            {id:2, title: 'Bibimbap', desc:'Bibimbap is widely beloved main dish'},
            {id:3, title: 'Bulgogi', desc: 'Bulgogi is fried meat with sweet sauce'},
          ]
        }
      }

    render(){
        var _title, _desc = null;
        if(this.state.mode ==='welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }
        else if(this.state.mode === 'read'){
            const idx = this.state.selected_content_id
            const contents = this.state.contents
            for(var i=0; i<contents.length; i++){
                var data = contents[i];
                if(data.id === idx){
                    _title = data.title;
                    _desc = data.desc;
                }
            }
        }

        return(
        <div className="App">
            <div className="App-header">
            <Subject 
            title= {this.state.subject.title}
            sub = {this.state.subject.sub}
            onChangePage = {function(){
            this.setState({mode:'welcome'})
            }.bind(this)}
            ></Subject>
            </div>
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
            <Measure/>
        </div>
        ); 
    }
    
}