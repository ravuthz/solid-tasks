import type { Component } from "solid-js";

import { TaskFormType } from "../../types";
import { createTaskStore } from "./task.store";

const { setTaskForm, taskForm } = createTaskStore;

const TaskForm: Component<TaskFormType> = ({ onAddTask }) => {

  return (
    <div>
      <h4 class="text-muted mb-4">Todo</h4>
      <form class="mb-5 row row-cols-2 justify-content-center">
        <input
          type="text"
          class="input-group-text p-1 w-25"
          placeholder="Add task here..."
          id="taskInput"
          required
          value={taskForm().title}
          onKeyUp={(e: any) =>
            setTaskForm((old) => ({ ...old, title: e.target?.value }))
          }
        />

        <button
          class="btn btn-primary ms-3 w-auto"
          type="button"
          disabled={!taskForm().title}
          onClick={() => onAddTask(taskForm())}
        >
          <i class="bi bi-plus-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
