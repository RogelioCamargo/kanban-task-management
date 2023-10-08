"use client";

import AddColumn from "./AddColumn";
import Column from "./Column";
import Button from "./Button";
import { useContext, useEffect } from "react";
import { BoardContext, BoardDispatchContext } from "@/providers";
import { ActionType } from "@/types";

export default function Board() {
  const { boards, board } = useContext(BoardContext);
  const dispatch = useContext(BoardDispatchContext);

  useEffect(() => {
    if (boards.length > 0) {
      dispatch({ type: ActionType.SelectBoard, payload: { id: boards[0].id } });
    }
  }, []);

  if (boards.length === 0) {
    return (
      <main className="p-3 text-center text-gray-300 flex flex-col items-center justify-center gap-6 lg:gap-8 bg-gray-100 dark:bg-gray-600">
        <p className="text-lg font-bold">
          You have no boards to display! Start by creating one!
        </p>
        <Button>+ Create New Board</Button>
      </main>
    );
  }

  if (!board) {
    return (
      <main className="p-3 text-center text-gray-300 flex flex-col items-center justify-center gap-6 lg:gap-8 bg-gray-100 dark:bg-gray-600"></main>
    );
  }

  const columns = board.columns;

  if (columns.length === 0) {
    return (
      <main className="p-3 text-center text-gray-300 flex flex-col items-center justify-center gap-6 lg:gap-8 bg-gray-100 dark:bg-gray-600">
        <p className="text-lg font-bold">
          This board is empty. Create a new column to get started.
        </p>
        <Button>+ Add New Column</Button>
      </main>
    );
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-600 px-4 py-6 flex gap-6 overflow-scroll">
      {board.columns.map((column) => (
        <Column key={column.id} board={board} column={column} />
      ))}
      <div className="py-[40px]">
        <AddColumn />
      </div>
    </main>
  );
}
