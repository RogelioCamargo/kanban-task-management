"use client";

import { ThemeProvider } from "next-themes";
import { boards, columns, tasks, subtasks } from "./data";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ContextProvider>{children}</ContextProvider>
    </ThemeProvider>
  );
}

import { createContext, useReducer } from "react";
import {
  ActionType,
  Board,
  BoardActions,
  Column,
  SubTask,
  Task,
} from "./types";

type InitialStateType = {
  boards: Board[];
  columns: Column[];
  tasks: Task[];
  subtasks: SubTask[];
  board: Board | null;
};

const initialState = {
  boards,
  columns,
  tasks,
  subtasks,
  board: null,
};

export const BoardContext = createContext<InitialStateType>(initialState);
export const BoardDispatchContext = createContext<React.Dispatch<BoardActions>>(
  () => undefined
);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(boardReducer, initialState);
  console.log(state);

  return (
    <BoardContext.Provider value={state}>
      <BoardDispatchContext.Provider value={dispatch}>
        {children}
      </BoardDispatchContext.Provider>
    </BoardContext.Provider>
  );
}

function boardReducer(state: InitialStateType, action: BoardActions) {
  switch (action.type) {
    case ActionType.SelectBoard:
      const boardSelected = state.boards.find(
        (board) => board.id === action.payload.id
      );
      if (!boardSelected) return state;

      return {
        ...state,
        board: boardSelected,
      };
    case ActionType.MoveTask:
      const { taskToMove, fromColumnId, toColumnId } = action.payload;

      var newTasks = state.tasks.map((task) => {
        if (task.id === taskToMove.id) {
          return {
            ...taskToMove,
            columnId: toColumnId,
          };
        }
        return task;
      });

      return {
        ...state,
        tasks: newTasks,
      };
    case ActionType.UpdateTask:
      const { payload: taskToUpdate } = action;
      var newTasks = state.tasks.map((task) => {
        if (task.id === taskToUpdate.id) {
          return taskToUpdate;
        }
        return task;
      });

      return {
        ...state,
        tasks: newTasks,
      };

    case ActionType.ToggleSubTask:
      const { payload: subtaskId } = action;

      const newSubtasks = state.subtasks.map((subtask) => {
        if (subtask.id === subtaskId) {
          return {
            ...subtask,
            isCompleted: !subtask.isCompleted,
          };
        }

        return subtask;
      });

      return {
        ...state,
        subtasks: newSubtasks,
      };
    default:
      return state;
  }
}
