import React from 'react'
import styles from './Style/Form.module.css'
import { useState } from 'react';

export default function Form ({todo, todoList, setTodo, setTodoList}){

    function handleSubmit(e) {
        e.preventDefault();
        {
          setTodoList([...todoList, todo]);
        }
        setTodo({ name: "", done: false });
    }
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.formInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          placeholder="Add a new todo..."
          value={todo.name}
        />
        <button className={styles.btn}>Add</button>
      </form>
    )
}
