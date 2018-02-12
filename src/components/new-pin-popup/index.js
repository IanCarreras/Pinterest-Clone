import React, { Component } from 'react';

class NewPinPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit() {
    const { title, url } = this.state
    this.props.actions.addImage(title, url)
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

        <h3>Source (http url)</h3>
        <input
          name="url"
          onChange={this.handleChange}
          value={this.state.url}
        />

        <button onClick={this.handleSubmit}>Ok</button>
        <button>Cancel</button>

      </div>
    );
  }
}

export default NewPinPopup;
