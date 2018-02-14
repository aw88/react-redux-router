import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddDefinition from './AddDefinition';
import DefinitionDetail from './DefinitionDetail';
import DefinitionListItem from './DefinitionListItem';

import { addDefinition, updateDefinition } from '../actions';

import './Definitions.css';

export const Definitions = ({ definitions, onAddDefinition, updateDefinition }) => (
  <div className="Definitions">
    <div className="Definitions__items">
      { definitions.map(d => <DefinitionListItem key={d.id} definition={d} />) }
      <hr/>
      <AddDefinition onAddDefinition={onAddDefinition}/>
    </div>
    <div className="Definitions__detail">
      <DefinitionDetail definition={definitions[0]} updateDefinition={updateDefinition}/>
    </div>
  </div>
);

Definitions.propTypes = {
  definitions: PropTypes.array,
  onAddDefinition: PropTypes.func
};

Definitions.defaultProps = {
  definitions: [],
  onAddDefinition: () => {}
};

const mapStateToProps = state => ({
  definitions: state.definitions
});

const mapDispatchToProps = dispatch => ({
  onAddDefinition: title => dispatch(addDefinition(title)),
  updateDefinition: (id, definition) => dispatch(updateDefinition(id, definition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Definitions);
