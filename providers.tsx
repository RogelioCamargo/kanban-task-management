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
import { Board, Column, SubTask, Task } from "./types";
import { boardReducer } from "./store/reducers";
import { BoardActions } from "./store/actions";

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
