import React, { Component } from 'react'

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
    this.props.actions.togglePopup()
  }

  render() {
    return (
      <div className="popup-pin">
        <div className="popup-inner">
          <img className="pin-image" src={this.state.url}></img>

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
          <button onClick={this.props.actions.togglePopup}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default NewPinPopup;
