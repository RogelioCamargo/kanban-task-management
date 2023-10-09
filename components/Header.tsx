"use client";

import { useContext, useState } from "react";
import Button from "./ui/Button";
import { BoardContext } from "@/providers";
import AddTaskForm from "./AddTaskForm";

export default function Header() {
  const { board } = useContext(BoardContext);
  const [openAddTaskForm, setOpenAddTaskForm] = useState(false);

  const closeForm = () => {
    setOpenAddTaskForm(false);
  };

  return (
    <header className="flex justify-between text-gray-500 dark:text-white px-4 py-7 bg-white dark:bg-gray-500 h-16 md:h-20 border-b border-gray-200 dark:border-gray-400">
      <div className="flex items-center gap-4">
        <svg
          className="md:hidden"
          width="24"
          height="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="#635FC7" fillRule="evenodd">
            <rect width="6" height="25" rx="2" />
            <rect opacity=".75" x="9" width="6" height="25" rx="2" />
            <rect opacity=".5" x="18" width="6" height="25" rx="2" />
          </g>
        </svg>
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">{board && board.name}</h1>
          <svg
            className="md:hidden"
            width="10"
            height="7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="#635FC7"
              strokeWidth="2"
              fill="none"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={() => setOpenAddTaskForm(true)}>
          <svg
            className="md:hidden"
            width="12"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFF"
              d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
            />
          </svg>
          <span className="hidden md:inline">+ Add New Task</span>
        </Button>
        <svg width="5" height="20" xmlns="http://www.w3.org/2000/svg">
          <g fill="#828FA3" fillRule="evenodd">
            <circle cx="2.308" cy="2.308" r="2.308" />
            <circle cx="2.308" cy="10" r="2.308" />
            <circle cx="2.308" cy="17.692" r="2.308" />
          </g>
        </svg>
      </div>
      {openAddTaskForm ? <AddTaskForm closeForm={closeForm} /> : null}
    </header>
  );
}
