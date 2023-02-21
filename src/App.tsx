import {
  Component,
  createEffect,
  createResource,
  createSignal,
  Suspense,
} from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import TaskList from "./components/task/TaskList";
import TaskForm from "./components/task/TaskForm";
import { createStore } from "solid-js/store";
import { createTaskStore } from "./components/task/task.store";

// import { useTaskCtx, TaskCtxProvider } from "./components/task/TaskContext";

const App: Component = () => {
  console.count("App");

  const {
    listTask,
    createTask,
    deleteTask,
    updateTask,
    toggleStatus,
    taskForm,
  } = createTaskStore;

  // const [
  //   { taskForm, taskList },
  //   { listTask, createTask, deleteTask, updateTask, toggleStatus },
  // ] = useTaskCtx();

  // const [todos] = createResource("", async () => {
  //   return await (
  //     await fetch("https://jsonplaceholder.typicode.com/todos")
  //   ).json();
  //   // .then((res) => res.json())
  //   // .then((data) => {
  //   //   console.log("data: ", data);
  //   //   return data;
  //   // });
  // });

  // setInterval(() => {
  //   setCount((c) => c + 1);
  // }, 1000);

  // createEffect(() => {
  //   console.log(
  //     `Count: ${getCount()} ${taskList.length}`
  //   );
  // });

  return (
    // <TaskCtxProvider>
    <div class={styles.App}>
      <Suspense fallback={<h1>Loading...</h1>}>
        {/* <p>Counter: {getCount()}</p> */}
        <TaskForm onAddTask={createTask} />
        {/* <TaskList
          tasks={todos()}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
          onToggleStatus={toggleStatus}
        /> */}
        <TaskList
          tasks={listTask()}
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
      </Suspense>
    </div>
    // </TaskCtxProvider>
  );
};

export default App;
