import React, { Component } from 'react';

class write extends Component {


  render() {

    return (
        <div>
            <div className='Write'>
                <input name = "title" type='text' id="title_txt" placeholder="제목"/>
            </div>

            <div>
                <textarea name="contents" id='content_txt'></textarea>
            </div>
        </div>
    );
  }
}

export default write;