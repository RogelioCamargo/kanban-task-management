"use client";

import { Column, TaskWithSubtasks } from "@/types";
import { useContext } from "react";
import { BoardContext, BoardDispatchContext } from "@/providers";
import { ActionType } from "@/store/actions";
import SubTask from "./SubTask";

export default function TaskDetails({
  task,
  closeDetails,
}: {
  task: TaskWithSubtasks;
  closeDetails: () => void;
}) {
  const dispatch = useContext(BoardDispatchContext);
  const numberTasksCompleted = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  );
  const { board, columns: stateColumns } = useContext(BoardContext);

  let columns: Column[] = [];
  if (board) {
    columns = stateColumns
      .filter((column) => column.boardId === board.id)
      .sort((a, b) => a.order - b.order);
  }

  return (
    <>
      <div
        className="h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-50 z-0"
        onClick={closeDetails}
      />
      <div className="text-xs font-bold text-gray-300 dark:text-white bg-white dark:bg-gray-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-[480px] mx-auto rounded-md flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center gap-8">
          <h3 className="text-lg font-bold text-black dark:text-white">
            {task.title}
          </h3>
          {/* <ExpandIcon /> */}
        </div>
        <p className="text-gray-300 font-normal text-sm leading-6">
          {task.description || "No description provided."}
        </p>
        <div>
          <h4 className="mb-4">
            Subtasks ({numberTasksCompleted.length} of {task.subtasks.length})
          </h4>
          <ul className="flex flex-col gap-2">
            {task.subtasks.map((subtask) => (
              <SubTask key={subtask.id} subtask={subtask} />
            ))}
          </ul>
        </div>
        <label className="flex flex-col gap-2">
          Current Status
          <div className="custom-select bg-white dark:bg-gray-500 border-gray-200 dark:border-gray-400 border rounded-sm">
            <select
              className="px-4 py-2 font-normal"
              value={task.status}
              onChange={(e) =>
                dispatch({
                  type: ActionType.UpdateTaskStatus,
                  payload: { ...task, status: e.target.value },
                })
              }
            >
              {columns.map((column) => (
                <option key={column.id} value={column.name}>
                  {column.name}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
    </>
  );
}
