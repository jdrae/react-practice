import React, { Component } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class ckeditor extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { contents, _getContents } = this.props;
    return (
        <div className="CKEditor">
            <CKEditor
                editor={ ClassicEditor }
                data={ contents }
                onBlur={ ( event, editor ) => { //내용창을 제외한 다른 부분들을 클릭했을때
                    const data = editor.getData();
                    _getContents(data);
                } }
            />
        </div>
    );
  }
}

export default ckeditor;