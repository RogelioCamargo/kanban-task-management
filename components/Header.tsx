"use client";

import { useContext, useState } from "react";
import Button from "./ui/Button";
import { BoardContext, BoardDispatchContext } from "@/providers";
import AddTaskForm from "./AddTaskForm";
import {
  AddIcon,
  BoardIcon,
  ChevronDownIcon,
  MobileCompanyIcon,
} from "./ui/Icons";
import ThemeToggler from "./ui/ThemeToggler";
import { ActionType } from "@/store/actions";

export default function Header() {
  const { board } = useContext(BoardContext);
  const [openAddTaskForm, setOpenAddTaskForm] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { boards, board: selectedBoard } = useContext(BoardContext);
  const dispatch = useContext(BoardDispatchContext);

  const closeForm = () => {
    setOpenAddTaskForm(false);
  };

  return (
    <header className="flex justify-between text-gray-500 dark:text-white px-4 py-7 bg-white dark:bg-gray-500 h-16 md:h-20 border-b border-gray-200 dark:border-gray-400">
      <div className="flex items-center gap-4">
        <MobileCompanyIcon />
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-bold">{board && board.name}</h1>
          <button
            className="md:hidden"
            onClick={() => setOpenMenu((previousState) => !previousState)}
          >
            <ChevronDownIcon />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={() => setOpenAddTaskForm(true)}>
          <AddIcon />
          <span className="hidden md:inline">+ Add New Task</span>
        </Button>
        {/* <ExpandIcon /> */}
      </div>
      {openAddTaskForm && board ? (
        <AddTaskForm board={board} closeForm={closeForm} />
      ) : null}
      {openMenu ? (
        <>
          <div
            className="h-screen w-screen absolute top-[63px] left-0 bg-black bg-opacity-50 z-0"
            onClick={() => setOpenMenu(false)}
          />
          <div className="text-xs font-bold bg-white dark:bg-gray-500 fixed top-[75px] left-1/2 -translate-x-1/2 w-[264px] rounded-md flex flex-col gap-6 py-4">
            <div className="text-gray-300 flex flex-col justify-between h-full">
              <h2 className="uppercase text-xs tracking-[2.4px] mb-5 pl-6">
                All Boards ({boards.length})
              </h2>
              <ul className="pr-6">
                {boards.map((board) => {
                  return (
                    <li
                      key={board.id}
                      className={[
                        "flex items-center py-4 gap-4 pl-6 rounded-r-full cursor-pointer",
                        selectedBoard && selectedBoard.id === board.id
                          ? "bg-primary text-white"
                          : "hover:dark:bg-white hover:bg-primary hover:bg-opacity-10 hover:text-primary",
                      ].join(" ")}
                      onClick={() =>
                        dispatch({
                          type: ActionType.SelectBoard,
                          payload: { id: board.id },
                        })
                      }
                    >
                      <BoardIcon />
                      <span>{board.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="px-4">
              <ThemeToggler />
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}
