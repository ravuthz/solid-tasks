import { createRoot, createSignal } from "solid-js";
import { createStore } from "solid-js/store";
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

function taskStore() {
  // const [taskList, setTaskList] = createStore([] as Task[]);
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

  return {
    taskList,
    listTask,
    showTask,
    taskForm,
    setTaskForm,
    setTaskList,
    createTask,
    deleteTask,
    updateTask,
    toggleStatus,
  };
};

export const createTaskStore = createRoot(taskStore);
