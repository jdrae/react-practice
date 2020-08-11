import React, {Component} from 'react';

class UpdateContent extends Component{
    render(){
      return (
        <div>
          <article>
            <h2>Update</h2>
            <form action = "/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
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
        </div>
      );
    }
  }

  export default UpdateContent;