import React from 'react';
import PropTypes from 'prop-types';

const AddDefinition = ({ onAddDefinition }) => {
  let input;

  const onSubmitHandler = e => {
    e.preventDefault();
    const trimmedTitle = input.value.trim();

    if (trimmedTitle) {
      onAddDefinition(trimmedTitle);
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

AddDefinition.propTypes = {
  onAddDefinition: PropTypes.func
};

AddDefinition.defaultProps = {
  onAddDefinition: () => {}
}

export default AddDefinition;
