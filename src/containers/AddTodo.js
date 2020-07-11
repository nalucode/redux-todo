import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({dispatch}) => {
  let input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div id="add-todo">
      <form
        onSubmit={e => handleSubmit(e)}
        >
          <input placeholder="Describe your task" ref={node => (input = node)} />
          <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default connect()(AddTodo);
