import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddDefinition from './AddDefinition';
import DefinitionListItem from './DefinitionListItem';

export const Definitions = ({ definitions }) => (
  <div className="Definitions">
    <h2>Definitions</h2>
    <div className="Definitions__items">
      { definitions.map(d => <DefinitionListItem key={d.id} definition={d} />) }
    </div>
    <AddDefinition />
  </div>
);

Definitions.propTypes = {
  definitions: PropTypes.array
};

Definitions.defaultProps = {
  definitions: []
};

const mapStateToProps = state => {
  return {
    definitions: state.definitions
  };
};

export default connect(mapStateToProps)(Definitions);
