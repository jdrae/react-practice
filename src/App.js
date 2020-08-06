import React, {Component} from 'react';
import TOC from './components/TOC'
import Content from './components/Content'
import Subject from  './components/Subject'

export default class App extends Component{
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

    render(){
       return(
        <div>
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

        </div>
        ); 
    }
    
}