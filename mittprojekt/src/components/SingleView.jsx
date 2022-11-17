import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />
}

class SingleView extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className='single-view'>
                <Link className='back-btn' to='/'>Back</Link>
                <p>ID: {this.props.params.id}</p>
                <p>Name: </p>
            </div>
        )
    }
}

// export default SingleView;
export default withParams(SingleView);