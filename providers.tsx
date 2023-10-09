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
  MoveTask,
  SelectBoard,
  SubTask,
  Task,
  ToggleSubTask,
  UpdateTask,
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
      return selectBoard(state, action);

    case ActionType.MoveTask:
      return moveTask(state, action);

    case ActionType.UpdateTask:
      return updateTask(state, action);

    case ActionType.ToggleSubTask:
      return toggleSubtask(state, action);

    case ActionType.CreateTask:
			return state;
			// const { title, description, status, boardId, subtasks } = action.payload;
			// const columns = state.columns.filter(column => column.boardId === boardId);
			// columns.sort((a, b) => a.order - b.order);

      // const tasksSortedByOrder = state.tasks.sort((a, b) => b.order - a.order);

      // const id = Math.floor(Math.random() * 1000000000);
      // const order =
      //   tasksSortedByOrder.length > 0 ? tasksSortedByOrder[0].order + 1 : 1;


      // const newTask = {
      //   id,
      //   order,
      //   title,
      //   description,
      //   status,
      //   columnId: columns[0].id,
      // };

      // const newlyCreatedSubtasks = subtasks.map((subtaskDiscription) => ({
      //   id: Math.floor(Math.random() * 1000000000),
      //   title: subtaskDiscription,
      //   isCompleted: false,
      //   taskId: id,
      // }));

      // const newTasks = [...state.tasks, newTask];
      // console.log("newTasks", newTasks);
      // const newSubtasks = [...state.subtasks, ...newlyCreatedSubtasks];
      // console.log("newTasks", newSubtasks);

      // return {
      //   ...state,
      //   tasks: newTasks,
      //   subtasks: newSubtasks,
      // };
    default:
      return state;
  }
}

function selectBoard(state: InitialStateType, action: SelectBoard) {
  const boardSelected = state.boards.find(
    (board) => board.id === action.payload.id
  );
  if (!boardSelected) return state;

  return {
    ...state,
    board: boardSelected,
  };
}

function moveTask(state: InitialStateType, action: MoveTask) {
  const { taskToMove, fromColumnId, toColumnId } = action.payload;

  const newTaskss = state.tasks.map((task) => {
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
    tasks: newTaskss,
  };
}

function updateTask(state: InitialStateType, action: UpdateTask) {
  const { payload: taskToUpdate } = action;
  const newTasks = state.tasks.map((task) => {
    if (task.id === taskToUpdate.id) {
      return taskToUpdate;
    }
    return task;
  });

  return {
    ...state,
    tasks: newTasks,
  };
}

function toggleSubtask(state: InitialStateType, action: ToggleSubTask) {
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
}
