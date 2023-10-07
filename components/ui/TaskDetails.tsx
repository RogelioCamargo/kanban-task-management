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
  return (
    <>
      <div
        className="h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-50 z-0"
        onClick={closeDetails}
      />
      <div className="bg-gray-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 mx-auto rounded-md flex flex-col gap-6 p-6">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-gray-300 font-normal text-sm leading-6">
          {task.description || "No description provided."}
        </p>
        <div className="text-xs">
          <h4 className="mb-4">0 of {task.subtasks.length} subtracks</h4>
          <ul className="flex flex-col gap-2">
            {task.subtasks.map((subtask) => (
              <SubTask key={subtask.title} subtask={subtask} />
            ))}
          </ul>
        </div>
        <label className="flex flex-col gap-2">
          Current Status
          <div className="custom-select bg-gray-500 border-gray-400 border-2 rounded-sm">
            <select className="px-4 py-2">
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            {/* <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
              <path
                stroke="#635FC7"
                strokeWidth="2"
                fill="none"
                d="m1 1 4 4 4-4"
              />
            </svg> */}
          </div>
        </label>
      </div>
    </>
  );
}