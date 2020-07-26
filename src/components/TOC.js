import React, {Component} from 'react';

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a href={"/content/"+data[i].id}>
            {data[i].title}
          </a></li>)
      }
      

      return (
        <nav>
          {lists}
        </nav>
      );
    }
  }

  export default TOC;