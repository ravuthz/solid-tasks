import { Component, createEffect, For } from "solid-js";

import { Task, TaskListType } from "../../types";
import TaskItem from "./TaskItem";

const TaskList: Component<TaskListType> = ({
  tasks,
  onDeleteTask,
  onUpdateTask,
  onToggleStatus,
}) => {
  return (
    <div>
      <h4 class="text-muted mb-4">Tasks</h4>
      <For each={tasks}>
        {(task: Task) => (
          <TaskItem {...{task, onDeleteTask, onUpdateTask, onToggleStatus}} />
        )}
      </For>
    </div>
  );
};

export default TaskList;
