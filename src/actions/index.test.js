import * as actions from '.';
import Definition from '../models/Definition';

describe('actions', () => {
  it('should create an action to add a definition', () => {
    const title = 'Definition title';
    const expectedAction = {
      type: actions.ADD_DEFINITION,
      title,
    };

    expect(actions.addDefinition(title)).toEqual(expectedAction);
  });

  it('should create an action to remove a definition', () => {
    const id = 1;
    const expectedAction = {
      type: actions.REMOVE_DEFINITION,
      id,
    };

    expect(actions.removeDefinition(id)).toEqual(expectedAction);
  });

  it('should create an action to update a definition', () => {
    const id = 1;
    const definition = new Definition(1, 'Title', ['term1'], ['term2']);
    const expectedAction = {
      type: actions.UPDATE_DEFINITION,
      id,
      definition,
    };

    expect(actions.updateDefinition(id, definition)).toEqual(expectedAction);
  });
});
