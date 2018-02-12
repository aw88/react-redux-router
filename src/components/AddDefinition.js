import React from 'react';
import { connect } from 'react-redux';

import { addDefinition } from '../actions';

const AddDefinition = ({ dispatch }) => {
  let input;

  const onSubmitHandler = e => {
    e.preventDefault();
    const trimmedTitle = input.value.trim();

    if (trimmedTitle) {
      dispatch(addDefinition(trimmedTitle));
      input.value = '';
    }
  }

  return (
    <div className="AddDefinition">
      <form onSubmit={onSubmitHandler}>
        <input ref={ node => input = node } />
        <button type="submit">
          +
        </button>
      </form>
    </div>
  )
}

export default connect()(AddDefinition);
