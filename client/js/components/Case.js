import React from 'react'
import { Link } from 'react-router'
import ajax from 'superagent'


class Case extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.params.title
    });
  }

  fetchCase(case_id) {
    ajax.get(`//MyRestEndpoint/case/${case_id}`)
        .end((error, response) => {
            if (!error && response) {
                this.setState({ [state]: response.body });
            } else {
                console.log(`Error fetching ${type}`, error);
            }
        }
    );
  }

  render() {
    return (
      <div class="container">
        <Link to="/"><button type="button" class="btn btn-primary">Back</button></Link>
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}

export default Case
