import React, {Component} from 'react';
import queryString from 'querystring';

class Test extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        const qry = queryString.parse(this.props.location.search);
        console.log(qry);
        return(
            <div>
                <h3> This is test page </h3>
                {/* <h3> Hi {this.props.match.params.data} </h3> */}
                <h3> Hi {qry.name} </h3>
                <h3> Age: {qry.age} </h3>
            </div>
        );
    }
}

export default Test;