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
      var h = "r"
      {this.state.isLiked ? h="s" : h="r"}
      var path = "fa"+h+" fa-heart"
      return (
        <i class={path} onClick={this.handleClick}></i>
      );
    }
  }

  export default Heart;