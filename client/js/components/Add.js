import React from 'react'
import { Link } from 'react-router'


class Add extends React.Component {
  render() {
    return (
      <div class="container">
        <Link to="/"><button type="button" class="btn btn-primary">Back</button></Link>
      </div>
    );
  }
}

export default Add
