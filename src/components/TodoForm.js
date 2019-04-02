import React from 'react';

class TodoForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();

    const { todoStore } = this.props;

    todoStore.add({
      name: this.nameInput.value,
      details: this.detailsInput.value
    });

    e.target.reset();
    this.nameInput.focus();
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            required
            className="input"
            type="text"
            ref={input => (this.nameInput = input)}
            id="name"
          />
        </label>
        <label htmlFor="details">
          Details
          <input
            required
            className="input"
            type="text"
            ref={input => (this.detailsInput = input)}
            id="details"
          />
        </label>
        <button
          className="btn btn-info mb-2"
          type="submit">
          Add
        </button>
      </form>
    );
  }
}

export default TodoForm;