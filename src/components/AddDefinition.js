import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  definitionTitle: ''
};

class AddDefinition extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const trimmedTitle = this.state.definitionTitle.trim();

    if (trimmedTitle.length) {
      this.props.onAddDefinition(trimmedTitle);
      this.setState(INITIAL_STATE);
    }
  }

  handleChange(e) {
    this.setState({ definitionTitle: e.target.value });
  }

  render() {
    return (
      <div className="AddDefinition">
        <form onSubmit={this.onSubmitHandler}>
          <input onChange={this.handleChange} value={this.state.definitionTitle}/>
          <button type="submit">
            +
          </button>
        </form>
      </div>
    );
  }
}

AddDefinition.propTypes = {
  onAddDefinition: PropTypes.func
};

AddDefinition.defaultProps = {
  onAddDefinition: () => {}
}

export default AddDefinition;
