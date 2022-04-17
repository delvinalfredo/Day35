import React, { useState } from 'react'
import './TodoContainer.css'
import AddTodo from './AddTodo'
import TodoCard from './TodoCard'

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([
        {
            index:0,
            title: 'Learn React',
            description: 'How to code reactJS',
            priority: 'Medium',
            note: 'no note'
        }
    ])

    const handleAddTodo = (newTodo) => {
        const tempNewTodo = {
            index: todoList.length + 1,
            title: newTodo.title,
            description: newTodo.description,
            priority: newTodo.priority,
            note: newTodo.note
        }
        setTodoList([...todoList, tempNewTodo])
    }

    const handleEditTodo = (editedTodo) => {
        const newTodoList = todoList.splice(editedTodo.index, 1, editedTodo)
        setTodoList(newTodoList)
    }

    const handleRemoveTodo = (index) => {
        const newTodoList = todoList.filter(todo => todo.index !== index)
        setTodoList(newTodoList)
    }

    return (
        <section>
            <AddTodo handleAddTodo={handleAddTodo} />
            {todoList.map((todo,index) => {
                return <TodoCard  key={index} todo={todo} handleRemoveTodo={handleRemoveTodo} handleEditTodo={handleEditTodo} />
            })}
        </section>
    )
}

export default TodoContainer