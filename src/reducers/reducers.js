import Definition from '../models/Definition';
import { ADD_DEFINITION, REMOVE_DEFINITION, UPDATE_DEFINITION } from '../actions';

const initialState = [];

const definitions = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DEFINITION:
      return [...state, new Definition(state.length + 1, action.title, [], [])];
    
    case REMOVE_DEFINITION:
      return state.filter(d => d.id !== action.id)
    
    case UPDATE_DEFINITION:
      const index = state.findIndex(d => d.id === action.id);

      if (index >= 0) {
        const newState = [...state];
        const newDefinition = new Definition(
          action.id,
          action.definition.title,
          action.definition.includedTerms,
          action.definition.excludedTerms
        );
        newState.splice(index, 1, newDefinition);
        return newState;
      } else {
        return state;
      }
    
    default:
      return state;
  }
};

export default definitions;
