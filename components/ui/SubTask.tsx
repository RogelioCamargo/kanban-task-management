"use client";

import { BoardDispatchContext } from "@/providers";
import { ActionType } from "@/store/actions";
import { SubTask } from "@/types";
import { useContext } from "react";

export default function SubTask({ subtask }: { subtask: SubTask }) {
  const dispatch = useContext(BoardDispatchContext);
  return (
    <li className="bg-gray-100 dark:bg-gray-600 rounded">
      <label className="container flex items-center gap-4 px-3 py-4">
        <span
          className={[
            "ml-2",
            subtask.isCompleted
              ? "line-through text-gray-300"
              : "text-black dark:text-white",
          ].join(" ")}
        >
          {subtask.title}
        </span>
        <input
          type="checkbox"
          checked={subtask.isCompleted}
          onChange={() =>
            dispatch({ type: ActionType.ToggleSubTask, payload: subtask.id })
          }
        />
        <span className="checkmark bg-white dark:bg-gray-500 border-gray-200 dark:border-gray-400 border"></span>
      </label>
    </li>
  );
}
