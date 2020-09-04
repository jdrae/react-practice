import React, { Component } from 'react';
import { CKEditor } from '../inc/index.js';
class write extends Component {


  render() {
    const { _getContents, contents } = this.props;
    return (
        <div>
            <div className='Write'>
              <div id = "Title">
                <input name = "title" type='text' id="title_txt" placeholder="제목"/>
              </div>
            </div>

            <div>
                <CKEditor 
                _getContents = { _getContents } 
                contents = { contents }
                /> 
            </div>
        </div>
    );
  }
}

export default write;