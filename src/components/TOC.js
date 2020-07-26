import React, {Component} from 'react';

class TOC extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id = {data[i].id} // e.target.dataset 의 변수 지정. -id 또는 -(arbitrary)
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id); //id를 가져오기 위해
            }.bind(this)}
            /*
            또는 다음과 같이 bind() 에 인자 설정.
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            */
          >
            {data[i].title}
          </a>
        </li>)
      }
      

      return (
        <nav>
          {lists}
        </nav>
      );
    }
  }

  export default TOC;