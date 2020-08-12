import React, {Component} from 'react';

class TOC extends Component{
  // render 이전에 실행되는 함수
  shouldComponentUpdate(newProps, newState){ 
    //새롭게 바뀐 값과 이전 값을 접근
    // console.log(newProps.data, this.props.data);
    if(this.props.data === newProps.data){
      return false; //TOC 값이 바뀌지 않았다면 render 호출하지 않음
      // 그러나 이때 app 에서 concat 이 아니라 push 를 사용하면 안됨
    }
    return true; //false 면 render 실행 안됨, true 면 실행
  }
    contentList(){
      const data = this.props.data;
      const lists = data.map((d)=>
        <li key={d.id}>
          <a
            href={"/content/"+d.id}
            data-id = {d.id}
            onClick={function(id,e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this,d.id)}
          >
            {d.title}
          </a>
        </li>
      )
      return (
        <ul className="cloud">
          {lists}
        </ul>
      );
    }
    render(){
      return(
        this.contentList()
      );

    }
  }

  export default TOC;