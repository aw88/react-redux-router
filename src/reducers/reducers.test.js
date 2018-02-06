import reducer from './reducers';
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
      ...firstExpectedState,
      new Definition(2, 'Another definition', [], [])
    ];

    expect(reducer(firstExpectedState, secondAction))
      .toEqual(secondExpectedState);
  });
});
