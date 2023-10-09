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

export enum ActionType {
  AddBoard,
  SelectBoard,
  MoveTask,
  UpdateTask,
  ToggleSubTask,
  CreateTask,
}

export interface AddBoard {
  type: ActionType.AddBoard;
  payload: {
    name: string;
    columns: string[];
  };
}

export interface SelectBoard {
  type: ActionType.SelectBoard;
  payload: { id: number };
}

export interface MoveTask {
  type: ActionType.MoveTask;
  payload: {
    fromColumnId: number;
    toColumnId: number;
    taskToMove: Task;
  };
}

export interface UpdateTask {
  type: ActionType.UpdateTask;
  payload: Task;
}

export interface ToggleSubTask {
  type: ActionType.ToggleSubTask;
  payload: number;
}

export interface CreateTask {
  type: ActionType.CreateTask;
  payload: {
    title: string;
    description: string;
    status: string;
    boardId: number;
    subtasks: string[];
  };
}

export type BoardActions =
  | AddBoard
  | SelectBoard
  | MoveTask
  | UpdateTask
  | ToggleSubTask
  | CreateTask;
