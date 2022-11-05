import { Component, createEffect, createSignal } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import TaskList from "./components/task/TaskList";
import TaskForm from "./components/task/TaskForm";
import { createStore } from "solid-js/store";

import {
  addTask,
  taskList,
  deleteTask,
  updateTask,
  toggleStatus,
  taskForm,
} from "./components/task/task.store";

const App: Component = () => {
  console.count("App");


  // setInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);

  // createEffect(() => {
  //   console.log(
  //     `Count: ${getCount()} ${taskList.length}`
  //   );
  // });

  return (
    <div class={styles.App}>
      {/* <p>Counter: {getCount()}</p> */}
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={taskList}
        onDeleteTask={deleteTask}
        onUpdateTask={updateTask}
        onToggleStatus={toggleStatus}
      />
      {/* <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header> */}
    </div>
  );
};

export default App;
