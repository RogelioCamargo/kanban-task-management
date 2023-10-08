"use client";

import { ThemeProvider } from "next-themes";
import { boards as initalBoards } from "./data";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <ContextProvider>{children}</ContextProvider>
    </ThemeProvider>
  );
}

import { createContext, useEffect, useReducer } from "react";
import { ActionType, Board, BoardActions } from "./types";

type InitialStateType = {
  boards: Board[];
  board: Board | null;
};

const initialState = {
  boards: initalBoards,
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
      const { taskToMove, fromColumnId, toColumnId, boardId } = action.payload;

      const newBoards = state.boards.slice().map((board) => {
        if (board.id === boardId) {
          return {
            ...board,
            columns: board.columns.slice().map((column) => {
              if (column.id === fromColumnId) {
                return {
                  ...column,
                  tasks: column.tasks
                    .slice()
                    .filter((task) => task.id !== taskToMove.id),
                };
              } else if (column.id === toColumnId) {
                return {
                  ...column,
                  tasks: [...column.tasks, taskToMove], // Use spread operator to create a new tasks array
                };
              }
              return { ...column };
            }),
          };
        }
        return { ...board };
      });

      return {
        ...state,
        boards: newBoards,
      };
    default:
      return state;
  }
}
