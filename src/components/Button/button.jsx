const { Component } = require('react');

class Button extends Component {
  render() {
    return <button onClick={this.props.nextPage}>Load more</button>;
  }
}
export default Button;
