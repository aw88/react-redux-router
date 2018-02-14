import React, { Component } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  title: ''
};

export class DefinitionDetail extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;

    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  componentDidMount() {
    console.log('DefinitionDetail.componentDidMount()');

    this._resetToProps();
  }

  _resetToProps() {
    if(this.props.definition) {
      const newState = Object.assign({}, this.state, {
        title: this.props.definition.title
      });

      this.setState(newState);
    }
  }

  handleCancelClick(e) {
    e.preventDefault();

    this._resetToProps();
  }

  handleSubmit(e) {
    e.preventDefault();

    const updatedDefinition = {
      id: this.props.definition.id,
      title: this.state.title,
      includedTerms: this.props.definition.includedTerms,
      excludedTerms: this.props.definition.excludedTerms
    };

    this.props.updateDefinition(updatedDefinition.id, updatedDefinition);
  }

  handleTitleChange(e) {
    const newState = Object.assign({}, this.state, {
      title: e.target.value
    });

    this.setState(newState);
  }

  render() {
    return (
      <div className="DefinitionDetail">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="DefinitionTitle">Title:</label>
            <input id="DefinitionTitle" type="text" onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <button type="submit">Save</button>
          <button onClick={this.handleCancelClick}>Cancel</button>
        </form>
      </div>
    )
  }
}

DefinitionDetail.propTypes = {
  definition: PropTypes.object,
  updateDefinition: PropTypes.func
};

DefinitionDetail.defaultProps = {
  updateDefinition: () => {}
};

export default DefinitionDetail;
