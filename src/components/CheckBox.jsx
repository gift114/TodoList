import React from "react";
import styles from "./Style/Check.module.css";

export default function CheckBox({ todoList, setTodoList, item, completedCount}) {

    function checkList(name) {
      const updatedList = todoList.map((todo) => {
        if (todo.name === name) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
  
      setTodoList(updatedList);

    }
  return (
    <div
      onClick={() => checkList(item.name)}
      className={styles.check}
      style={{
        backgroundColor: item.done ? "purple" : "",
        display: "inline-block",
        marginRight: "10px",
      }}
    >
      {" "}
    </div>
  );
}
