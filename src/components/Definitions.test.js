import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Definitions } from './Definitions';
import Definition from '../models/Definition';
import DefinitionListItem from './DefinitionListItem';

describe('Definitions', () => {
  const definitions = [
    new Definition(1, 'First definition'),
    new Definition(2, 'Second definition'),
    new Definition(3, 'Third definition')
  ];

  it('should render definition items in a list', () => {
    const wrapper = shallow(<Definitions definitions={definitions}/>);

    const listItems = wrapper.find('DefinitionListItem');

    expect(listItems.length).toEqual(3);

    [0, 1, 2].forEach(i => {
      expect(listItems.get(i).props.definition).toEqual(definitions[i]);
    });
  });
});
