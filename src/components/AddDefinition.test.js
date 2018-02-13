import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import AddDefinition from './AddDefinition';

describe('AddDefinitio', () => {
  it('should render without error', () => {
    const div = document.createElement('div');

    ReactDOM.render(<AddDefinition/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should trigger onAddDefinition when a title is entered', () => {
    const handler = jest.fn();
    const wrapper = mount(<AddDefinition onAddDefinition={handler}/>);
    const definitionTitle = 'Definition';

    wrapper.find('input').simulate('change', { target: { value: definitionTitle } });
    wrapper.find('form').simulate('submit');

    expect(handler.mock.calls.length).toEqual(1);
    expect(handler.mock.calls[0][0]).toEqual(definitionTitle);
  });

  it('should not trigger onAddDefinition if no title is entered', () => {
    const handler = jest.fn();
    const wrapper = mount(<AddDefinition onAddDefinition={handler}/>);

    wrapper.find('form').simulate('submit');

    expect(handler.mock.calls.length).toEqual(0);
  });

  it('should not trigger onAddDefinition if only whitespace entered', () => {
    const handler = jest.fn();
    const wrapper = mount(<AddDefinition onAddDefinition={handler}/>);
    const definitionTitle = ' ';

    wrapper.find('input').simulate('change', { target: { value: definitionTitle } });
    wrapper.find('form').simulate('submit');

    expect(handler.mock.calls.length).toEqual(0);
  });
});
