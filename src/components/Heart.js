import React, {Component} from 'react';

class Heart extends Component{
    constructor(props){
        super(props);
        this.state = {isLiked: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state=>({
            isLiked: !state.isLiked
        }));
    }

    render(){
      return (
        <button onClick={this.handleClick}>
            {this.state.isLiked ? "unlike" : "like"}
        </button>
      );
    }
  }

  export default Heart;