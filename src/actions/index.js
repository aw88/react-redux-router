export const ADD_DEFINITION = 'ADD_DEFINITION';
export const REMOVE_DEFINITION = 'REMOVE_DEFINITION';
export const UPDATE_DEFINITION = 'UPDATE_DEFINITION';

export const addDefinition = (title) => ({
  type: ADD_DEFINITION,
  title,
});

export const removeDefinition = (id) => ({
  type: REMOVE_DEFINITION,
  id,
});

export const updateDefinition = (id, definition) => ({
  type: UPDATE_DEFINITION,
  id,
  definition,
});
