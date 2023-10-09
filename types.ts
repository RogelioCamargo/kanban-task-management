export interface SubTask {
  id: number;
  title: string;
  isCompleted: boolean;
  taskId: number;
}

export interface Task {
  id: number;
  title: string;
  description?: string;
  status: string;
  columnId: number;
  order: number;
}

export interface TaskWithSubtasks extends Task {
  subtasks: SubTask[];
}

export interface Column {
  id: number;
  name: string;
  boardId: number;
  order: number;
}

export interface ColumnWithTasks extends Column {
  tasks: TaskWithSubtasks[];
}

export interface Board {
  id: number;
  name: string;
}

export interface BoardWithColumns extends Column {
  columns: ColumnWithTasks[];
}
