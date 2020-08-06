import React, {Component} from 'react';

class TOC extends Component{
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
        <nav>
          {lists}
        </nav>
      );
    }
    render(){
      return(
        this.contentList()
      );

    }
  }

  export default TOC;