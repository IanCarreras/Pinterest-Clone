import React, { Component } from 'react';

class NewPinPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div className="pin">

        <h2>image block here</h2>

        <h3>Title</h3>
        <input
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
        />

        <h3>Source (http link)</h3>
        <input
          name="link"
          onChange={this.handleChange}
          value={this.state.link}
        />

        <button>Ok</button>
        <button>Cancel</button>

      </div>
    );
  }
}

export default NewPinPopup;
