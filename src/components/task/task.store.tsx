import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { Task } from "../../types";
import { createLocalStore } from "../../utils/localStore";

const initialValues: Task = {
  id: '',
  text: '',
  completed: false
}

// const [taskList, setTaskList] = createStore([] as Task[]);
const [taskForm, setTaskForm] = createSignal(initialValues);
const [taskList, setTaskList] = createLocalStore<Task[]>("tasks", []);

const addTask = (task: Task) => {
  const id = Math.random().toString(36).substring(2);
  setTaskList([
    {...task, id, completed: false},
    ...taskList
  ]);
  setTaskForm(initialValues);
};

const updateTask = (task: Task) => {
  setTaskList((items: Task[]) => items.map((item) => item.id == task.id ? task : item));
}

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

export { taskList, setTaskList, taskForm, setTaskForm, addTask, deleteTask, updateTask, toggleStatus };
