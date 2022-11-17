import { Component } from 'react';
import { Link } from 'react-router-dom';

class Reaction extends Component {
    render() {
        let {id, name, image} = this.props;
        return (
            <Link to={'/view/' + id} className='card-link'>
                <div className='cards'>
                    <img alt='Pokemon' src={image} />
                    <div className='desc'>
                        <p>#{id}</p>
                        <p>{name}</p>
                    </div>
                </div>
            </Link>
        );
    }
}

export default Reaction;