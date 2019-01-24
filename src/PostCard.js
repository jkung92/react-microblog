import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostCard extends Component {
  render() {
    const { id, body, title, description } = this.props;
    return (
      <div>
        <Link to={`/${id}`} body={body}>
          <div className="card m-3 bg-light" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{description}</h6>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default PostCard;
