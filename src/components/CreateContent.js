import React, {Component} from 'react';
import Heart from './Heart'

class CreateContent extends Component{
    render(){
      return (
        <div>
          <article>
            <h2>Create</h2>
            <form action = "/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
                alert('Submit');
              }.bind(this)}
            >
              <p><input type="text" name="title" placeholder={this.props.title}></input></p>
              <p>
                <textarea name="desc" placeholder={this.props.desc}></textarea>
              </p>
              <p>
                <input type="submit" value="submit"></input>
              </p>
            </form>
          </article>
          <Heart/>
        </div>
      );
    }
  }

  export default CreateContent;