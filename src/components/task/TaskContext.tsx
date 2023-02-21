import { createContext, createSignal, useContext } from "solid-js";
// import { createStore } from "solid-js/store";

import { Task } from "../../types";
import { createLocalStore } from "../../utils/localStore";

const initialValues: Task = {
  id: "",
  title: "",
  completed: false,
};

const uuid = () => {
  return Math.random().toString(36).substring(2);
};

// export type TaskContextType = {
//     taskForm: any;
//     taskList: any[];
//     [key: string]: (data: any) => void;
// };

export const TaskContext = createContext<any>([{}, {}]);

export function TaskCtxProvider(props: any) {
  //   const [state, setState] = createStore({ count: props.count || 0 });

  const [taskForm, setTaskForm] = createSignal(initialValues);
  const [taskList, setTaskList] = createLocalStore<Task[]>("tasks", []);

  const listTask = () => {
    return taskList;
  };

  const showTask = (id: string | number) => {
    return taskList.find((item) => item.id == id);
  };

  const createTask = (task: Task) => {
    const id = uuid();
    setTaskList([{ ...task, id, completed: false }, ...taskList]);
    setTaskForm(initialValues);
  };

  const updateTask = (task: Task) => {
    setTaskList((items: Task[]) =>
      items.map((item) => (item.id == task.id ? task : item))
    );
  };

  const deleteTask = (task: Task) => {
    setTaskList(taskList.filter((item: Task) => item !== task));
  };

  const toggleStatus = (task: Task) => {
    setTaskList(
      (item: Task) => item.id === task.id,
      "completed",
      (completed) => !completed
    );
  };

  //   const counter = [
  //     state,
  //     {
  //       increment() {
  //         setState("count", (c) => c + 1);
  //       },
  //       decrement() {
  //         setState("count", (c) => c - 1);
  //       },
  //     },
  //   ];

  const value = [
    {
      taskForm,
      taskList,
    },
    {
      setTaskForm,
      setTaskList,
      listTask,
      showTask,
      createTask,
      updateTask,
      deleteTask,
      toggleStatus,
    },
  ];

  return (
    <TaskContext.Provider value={value}>{props.children}</TaskContext.Provider>
  );
}

export const useTaskCtx = () => useContext(TaskContext);
