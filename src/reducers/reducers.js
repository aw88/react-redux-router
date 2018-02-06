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
        const newDefinition = new Definition(action.id, action.title, action.includedTerms, action.excludedTerms);
        return [...state].splice(index, 1, newDefinition);
      } else {
        return state;
      }
    
    default:
      return state;
  }
};

export default definitions;
