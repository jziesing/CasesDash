import React from 'react'
import { Link } from 'react-router'
import ajax from 'superagent'


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'commits',
      commits: [],
      search_commits: [],
      searchString: ''
    };
  }

  componentWillMount() {
    this.fetchData(this.state.mode, 'commits');
    this.fetchData(this.state.mode, 'search_commits');
  }

  fetchData(type, state) {
    ajax.get(`https://api.github.com/repos/facebook/react/${type}`)
      .end((error, response) => {
        if (!error && response) {
            this.setState({ [state]: response.body });
        } else {
            console.log(`Error fetching ${type}`, error);
        }
      }
    );
  }

  renderData() {
    return this.state.search_commits.map((commit, index) => {
      const author = commit.author ? commit.author.login : 'Anonymous';
      const route = 'case/' + author + '-' + index;
      return (
        <tr key={index}><td>{index + 1}</td><td><Link to={route}>{author}</Link></td><td>{commit.commit.message}</td></tr>
    );
    });
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value });
  }

  render() {
    let table;
    let searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      this.state.search_commits = this.state.commits.filter(function(l){
          return String(l.commit.message).toLowerCase().match(searchString);
      });
    } else {
      this.state.search_commits = this.state.commits;
    }

    table = this.renderData();

    return (
      <div><div class="container-fluid">
          <div class="row minispacer">
            <div class="col-md-6 col-md-offset-2">
              <div class="input-group">
                <span class="input-group-addon" id="basic-addon1">$$</span>
                <input type="text" class="form-control" value={this.state.searchString} onChange={this.handleChange.bind(this)} placeholder="Search" aria-describedby="basic-addon1" />
                <span class="input-group-addon" id="basic-addon1">$$</span>
              </div>
            </div>
            <div class="col-md-1">
              <Link to="add"><button type="button" class="btn btn-primary">Add Case</button></Link>
            </div>
          </div>
        </div>
        <div class="spacer">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {table}
            </tbody>
          </table>
      </div></div>
    );
  }
}

export default Home
