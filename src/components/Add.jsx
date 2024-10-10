import React from "react";
import CheckBox from "./CheckBox";
import Delete from "./Delete";
import styles from "./Style/List.module.css";

export default function Add({ todoList, setTodoList }) {
  const sortedList = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <>
      <h3 className="list">Your todo list:</h3>
      <div>
        {sortedList.map((item, index) => (
          <p className={styles.listContainer} key={index}>
            {item.name}
            <div className={styles.list}>
              <CheckBox
                todoList={todoList}
                setTodoList={setTodoList}
                item={item}
              />
              <Delete
                todoList={todoList}
                setTodoList={setTodoList}
                item={item}
              />
            </div>
          </p>
        ))}
      </div>
    </>
  );
}
