import React from 'react'
import styles from './Style/Delete.module.css'

export default function Delete ({todoList, setTodoList, item}) {
    return (
        <div>
          <button 
            className={styles.delete}
              onClick={() => setTodoList(todoList.filter((todo) => todo !== item))}>
                x
          </button>
        </div>
      )
}
