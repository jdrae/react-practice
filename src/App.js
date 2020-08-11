import React, {Component} from 'react';
import TOC from './components/TOC'
import ReadContent from './components/ReadContent'
import CreateContent from './components/CreateContent'
import UpdateContent from './components/UpdateContent'
import Subject from  './components/Subject'
import Measure from  './components/Measure'
import Control from  './components/Control'

import './App.css'

export default class App extends Component{
    constructor(props){
        super(props); //초기화
        this.max_content_id=3;
        this.state = {
          selected_content_id:2,
          mode: 'update',
          subject: {title:'DaRecipe', sub: 'World Wide Recipe'},
          welcome: {title:"Welcome", desc: "Hello"},
          contents: [
            {id:1, title: 'Hwachae', desc:'Hwachae is summer desert'},
            {id:2, title: 'Bibimbap', desc:'Bibimbap is widely beloved main dish'},
            {id:3, title: 'Bulgogi', desc: 'Bulgogi is fried meat with sweet sauce'},
          ]
        }
    }
    
    getreadContent(idx){
        const contents = this.state.contents
        for(var i=0; i<contents.length; i++){
            var data = contents[i];
            if(data.id === idx){
                return data;
            }
        }
    }

    getContent(){
        var _title, _desc, _article = null;
        if(this.state.mode ==='welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }
        else if(this.state.mode === 'read'){
            const idx = this.state.selected_content_id
            var data = this.getreadContent(idx)
            _title = data.title;
            _desc = data.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        }
        else if(this.state.mode === 'create'){
            _article = <CreateContent onSubmit={function(_title,_desc){
                this.max_content_id += 1;
                // push 는 원본을 직접 바꿈.
                /* this.state.contents.push(
                    {id:this.max_content_id, title:_title, desc:_desc}
                );*/
                // concat 을 사용해 원본을 바꾸지 않고 새로운 데이터 생성
                var _contents = this.state.contents.concat(
                    {id:this.max_content_id, title:_title, desc:_desc}
                )
                this.setState({
                    contents: _contents
                });
            }.bind(this)}></CreateContent>
        }
        else if(this.state.mode === 'update'){
            _article = <UpdateContent onSubmit={function(_title,_desc){
                
            }.bind(this)}></UpdateContent>
        }

        return _article
    }

    render(){
        
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
            <Control onChangeMode={function(_mode){
                this.setState({
                    mode: _mode
                })
            }.bind(this)}></Control>


            {this.getContent()}
            <Measure/>
        </div>
        ); 
    }
    
}