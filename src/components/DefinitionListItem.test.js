import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import DefinitionListItem from './DefinitionListItem';
import Definition from '../models/Definition';

describe('DefinitionListItem', () => {
  const definition = new Definition(1, 'First definition');

  it('should render without error', () => {
    const div = document.createElement('div');

    ReactDOM.render(<DefinitionListItem definition={definition} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should show the definition title', () => {
    const wrapper = shallow(<DefinitionListItem definition={definition}/>);

    expect(wrapper.find('h4').text()).toEqual(definition.title);
  });
});
