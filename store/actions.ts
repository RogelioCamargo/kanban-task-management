import { Board, Column, SubTask, Task } from "@/types";

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

export type InitialStateType = {
  boards: Board[];
  columns: Column[];
  tasks: Task[];
  subtasks: SubTask[];
  board: Board | null;
};

export type BoardActions =
  | AddBoard
  | SelectBoard
  | MoveTask
  | UpdateTask
  | ToggleSubTask
  | CreateTask;
