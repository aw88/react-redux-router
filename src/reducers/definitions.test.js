import reducer from './definitions';
import * as actions from '../actions';
import Definition from '../models/Definition';

describe('definition reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_DEFINITION action', () => {
    const firstAction = {
      type: actions.ADD_DEFINITION,
      title: 'Definition title'
    };

    const firstExpectedState = [
      new Definition(1, 'Definition title', [], [])
    ];

    expect(reducer([], firstAction)).toEqual(firstExpectedState);

    const secondAction = {
      type: actions.ADD_DEFINITION,
      title: 'Another definition'
    };

    const secondExpectedState = [
      new Definition(1, 'Definition title', [], []),
      new Definition(2, 'Another definition', [], [])
    ];

    expect(reducer(firstExpectedState, secondAction))
      .toEqual(secondExpectedState);
  });

  it('should handle UPDATE_DEFINITION action', () => {
    const initialState = [
      new Definition(1, 'Definition title', [], []),
      new Definition(2, 'Another definition', [], [])
    ];

    const action = {
      type: actions.UPDATE_DEFINITION,
      id: 2,
      definition: new Definition(2, 'Updated definition', ['term1'], ['term2'])
    };

    const expectedState = [
      new Definition(1, 'Definition title', [], []),
      new Definition(2, 'Updated definition', ['term1'], ['term2'])
    ];

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
