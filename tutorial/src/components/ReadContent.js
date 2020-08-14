import React, {Component} from 'react';
import Heart from './Heart'

class ReadContent extends Component{
    render(){
      return (
        <div>
          <article>
            <div className="contentHeader">
            <div className="contentTitle">{this.props.title}</div>
            <Heart/>
            </div>
            <p>{this.props.desc}
            
            
            </p>
          </article>
        </div>
      );
    }
  }

  export default ReadContent;