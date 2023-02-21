import { Component, createSignal, For, Match, Show, Switch } from "solid-js";

import { TaskItemType } from "../../types";

const TaskItem: Component<TaskItemType> = ({
  task,
  onDeleteTask,
  onUpdateTask,
  onToggleStatus,
}) => {
  const [edit, setEdit] = createSignal(false);

  const handleTaskSave = () => {
    onUpdateTask(task);
    setEdit(false); 
  }

  return (
    <div class="row row-cols-3 mb-3 justify-content-center text-truncate">
      <Switch>
        <Match when={edit()}>
          <button
            class="btn btn-success w-auto"
            onClick={handleTaskSave}
          >
            <i class="bi bi-check2"></i>
          </button>
        </Match>
        <Match when={!edit()}>
          <button
            class="btn btn-danger w-auto"
            onClick={() => onDeleteTask(task)}
          >
            <i class="bi bi-trash3"></i>
          </button>
        </Match>
      </Switch>

      <div
        contentEditable={edit()}
        onDblClick={() => setEdit(true)}
        class={`bg-light p-2 mx-2 ${
          task.completed && "text-decoration-line-through text-success"
        }`}
      >
        {task.title}
      </div>
      <input
        type="checkbox"
        checked={task.completed}
        role="button"
        class="form-check-input h-auto px-3"
        onClick={() => onToggleStatus(task)}
      />
    </div>
  );
};

export default TaskItem;
