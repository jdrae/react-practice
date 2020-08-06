import React, {Component} from 'react';
import Heart from './Heart'

class Content extends Component{
    render(){
      return (
        <div>
          <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
          </article>
          <Heart/>
        </div>
      );
    }
  }

  export default Content;