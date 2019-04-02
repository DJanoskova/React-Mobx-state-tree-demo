import React, { useState } from 'react';
import { inject } from 'mobx-react';

const TodoForm = ({ handleTodoAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    details: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

    handleTodoAdd(formData);

    setFormData({
      name: '',
      details: ''
    });
    e.target.reset();
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormData({
      ...formData,
      [name]: value
    })
  };

  return (
    <form
      onSubmit={handleSubmit}>
      <input type="text" placeholder="name" name="name" onChange={handleInputChange} />
      <input type="text" placeholder="details" name="details" onChange={handleInputChange} />
      <button type="submit">
        Add
      </button>
    </form>
  );
};

const mapStoreToProps = ({ todoStore }) => {
  return {
    handleTodoAdd: todoStore.add
  };
};

export default inject(mapStoreToProps)(TodoForm);