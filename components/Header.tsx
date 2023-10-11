"use client";

import { useContext, useState } from "react";
import Button from "./ui/Button";
import { BoardContext } from "@/providers";
import AddTaskForm from "./AddTaskForm";
import { ChevronDownIcon, MobileCompanyIcon } from "./ui/Icons";

export default function Header() {
  const { board } = useContext(BoardContext);
  const [openAddTaskForm, setOpenAddTaskForm] = useState(false);

  const closeForm = () => {
    setOpenAddTaskForm(false);
  };

  return (
    <header className="flex justify-between text-gray-500 dark:text-white px-4 py-7 bg-white dark:bg-gray-500 h-16 md:h-20 border-b border-gray-200 dark:border-gray-400">
      <div className="flex items-center gap-4">
        <MobileCompanyIcon />
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">{board && board.name}</h1>
          <button className="md:hidden">
            <ChevronDownIcon />
          </button>
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
        {/* <ExpandIcon /> */}
      </div>
      {openAddTaskForm && board ? (
        <AddTaskForm board={board} closeForm={closeForm} />
      ) : null}
    </header>
  );
}
