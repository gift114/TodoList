import React from "react";
import Add from "./components/Add";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { useState } from "react";
import styles from "./components/Style/Container.module.css";

function App() {
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todoList, setTodoList] = useState([]);
  const completedCount = todoList.filter((todo) => todo.done).length;
  const totalTodos = todoList.length;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <h2>What is to be done?</h2>
        <Form
          todo={todo}
          setTodo={setTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <Add todoList={todoList} setTodoList={setTodoList} />
      </div>
      <Footer completedCount={completedCount} totalTodos={totalTodos} />
    </div>
  );
}

export default App;
