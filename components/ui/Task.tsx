"use client";

import { Task } from "@/types";
import { useState } from "react";
import TaskDetails from "./TaskDetails";

export default function Task({ task }: { task: Task }) {
  const [openDetails, setOpenDetails] = useState(false);

  const closeDetails = () => {
    setOpenDetails(false);
  };

  return (
    <>
      <li
        className="px-4 md:px-6 py-6 bg-white dark:bg-gray-500 rounded-lg font-bold"
        draggable
        onClick={() => setOpenDetails(true)}
      >
        <h3 className="mb-2">{task.title}</h3>
        <p className="text-sm text-gray-300">
          0 of {task.subtasks.length} subtasks
        </p>
      </li>
      {openDetails ? (
        <TaskDetails task={task} closeDetails={closeDetails} />
      ) : null}
    </>
  );
}
