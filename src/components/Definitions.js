import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddDefinition from './AddDefinition';
import DefinitionListItem from './DefinitionListItem';

import { addDefinition } from '../actions';

export const Definitions = ({ definitions, onAddDefinition }) => (
  <div className="Definitions">
    <h2>Definitions</h2>
    <div className="Definitions__items">
      { definitions.map(d => <DefinitionListItem key={d.id} definition={d} />) }
    </div>
    <AddDefinition onAddDefinition={onAddDefinition}/>
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
  onAddDefinition: title => { console.log('wat'); dispatch(addDefinition(title)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Definitions);
