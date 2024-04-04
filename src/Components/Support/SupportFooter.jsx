import React, { Component } from "react";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEl: "",
    };
  }
  handleClick(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputEl);
    this.setState({
      inputEl: "",
    });
  }
  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input
              onChange={(e) => this.setState({ inputEl: e.target.value })}
              type="text"
              value={this.state.inputEl}
              className="form-control"
              placeholder="Say something"
            />
            <span className="input-group-btn">
              <button
                disabled={this.state.inputEl ? false : true}
                onClick={this.handleClick.bind(this)}
                className="btn btn-primary"
                type="button"
              >
                Send
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}
