import React from 'react';
import { connect } from 'react-redux';

import AddDefinition from './AddDefinition';
import DefinitionListItem from './DefinitionListItem';

const Definitions = ({ definitions }) => (
  <div className="Definitions">
    <h2>Definitions</h2>
    <div className="Definitions__items">
      { definitions.map(d => <DefinitionListItem key={d.id} definition={d} />) }
    </div>
    <AddDefinition />
  </div>
);

const mapStateToProps = state => {
  return {
    definitions: state.definitions
  };
};

export default connect(mapStateToProps)(Definitions);
