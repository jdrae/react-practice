import React, {Component} from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state = {
        id: this.props.data.id,
        title: this.props.data.title,
        desc: this.props.data.desc
      }
      this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e){
      this.setState({
        // title 과 desc 를 동시에 바꿀 수 있음
        [e.target.name]: e.target.value
      });
    }
    render(){
      return (
        <div>
          <article>
            <h2>Update</h2>
            <form action = "/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  this.state.id,
                  this.state.title,
                  this.state.desc
                )
              }.bind(this)}
            >
              <input type="hidden" name="id" value={this.state.id}></input>
              <p><input 
                type="text" 
                name="title" 
                value={this.state.title}
                onChange={this.inputFormHandler}></input></p>
              <p>
                <textarea 
                  name="desc"
                  value = {this.state.desc}
                  onChange={this.inputFormHandler}
                  ></textarea>
              </p>
              <p>
                <input type="submit" value="submit"></input>
              </p>
            </form>
          </article>
        </div>
      );
    }
  }

  export default UpdateContent;