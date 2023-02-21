export type Task = {
  id?: string;
  title: string;
  userId?: number;
  completed?: boolean;
};

export type TaskFormType = {
  onAddTask: (task: Task) => void;
};

export type TaskItemType = {
  task: Task;
  onDeleteTask: (task: Task) => void;
  onUpdateTask: (task: Task) => void;
  onToggleStatus: (task: Task) => void;
}

export type TaskListType = {
  tasks: Task[] ;
  onDeleteTask: (task: Task) => void;
  onUpdateTask: (task: Task) => void;
  onToggleStatus: (task: Task) => void;
};