"use client";

import AddColumn from "./AddColumn";
import Column from "./Column";
import Button from "./Button";
import { useContext, useEffect } from "react";
import { BoardContext, BoardDispatchContext } from "@/providers";
import { ActionType } from "@/types";

export default function Board() {
  const {
    boards,
    columns,
    tasks,
    subtasks,
    board: selectedBoard,
  } = useContext(BoardContext);
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

  if (!selectedBoard) {
    return (
      <main className="p-3 text-center text-gray-300 flex flex-col items-center justify-center gap-6 lg:gap-8 bg-gray-100 dark:bg-gray-600"></main>
    );
  }

  const boardColumns = columns.filter(
    (column) => column.boardId === selectedBoard.id
  );
  const columnsWithTasks = boardColumns.map((column) => {
    const columnTasks = tasks.filter((task) => task.columnId === column.id);
    const tasksWithSubtasks = columnTasks.map((task) => {
      const taskSubtasks = subtasks.filter(
        (subtask) => subtask.taskId === task.id
      );
      return {
        ...task,
        subtasks: taskSubtasks,
      };
    });

    return {
      ...column,
      tasks: tasksWithSubtasks,
    };
  });

  if (columnsWithTasks.length === 0) {
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
      {columnsWithTasks
        .sort((a, b) => a.order - b.order)
        .map((column) => (
          <Column key={column.id} column={column} />
        ))}
      <div className="py-[40px]">
        <AddColumn />
      </div>
    </main>
  );
}
