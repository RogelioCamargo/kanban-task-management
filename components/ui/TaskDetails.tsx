"use client";

import { Task } from "@/types";
import SubTask from "./SubTask";

export default function TaskDetails({
  task,
  closeDetails,
}: {
  task: Task;
  closeDetails: () => void;
}) {
  const numberTasksCompleted = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  );

  return (
    <>
      <div
        className="h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-50 z-0"
        onClick={closeDetails}
      />
      <div className="text-xs font-bold text-gray-300 dark:text-white bg-white dark:bg-gray-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-[480px] mx-auto rounded-md flex flex-col gap-6 p-6">
        <div className="flex justify-between items-center gap-8">
          <h3 className="text-lg font-bold text-black dark:text-white">{task.title}</h3>
          <svg width="7" height="22" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fillRule="evenodd">
              <circle cx="2.308" cy="2.308" r="2.308" />
              <circle cx="2.308" cy="10" r="2.308" />
              <circle cx="2.308" cy="17.692" r="2.308" />
            </g>
          </svg>
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
              onChange={() => console.log("selected")}
            >
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
        </label>
      </div>
    </>
  );
}
