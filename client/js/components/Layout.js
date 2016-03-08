import React from 'react'


class Layout extends React.Component {
  render() {
    return (
      <div>
        <div class="header clearfix">
          <h3 class="text-muted"><a href="/">Case Practice</a></h3>
        </div>
        { this.props.children }
        <footer class="footer">
          <p>&copy; 2015 Company, Inc.</p>
        </footer>
      </div>
    );
  }
}

export default Layout
