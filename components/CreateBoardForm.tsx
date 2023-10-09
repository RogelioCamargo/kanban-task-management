"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

export default function CreateBoardForm({
  closeForm,
}: {
  closeForm: () => void;
}) {
  const [name, setName] = useState("");
  const [columns, setColumns] = useState(["Todo", "Doing"]);

  const handleSubmit = () => {
    alert("Feature Not Implemented Yet");

    closeForm();
  };

  return (
    <>
      <div
        className="h-screen w-screen absolute top-0 left-0 bg-black bg-opacity-50 z-0"
        onClick={closeForm}
      />
      <div className="text-xs font-bold bg-white dark:bg-gray-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 md:w-[480px] mx-auto rounded-md flex flex-col gap-6 p-6">
        <h4 className="text-lg text-black dark:text-white">Add New Board</h4>
        <label className="text-gray-300">
          Name
          <Input
            name="title"
            value={name}
            placeholder="e.g. Take a coffee break"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="text-gray-300">
          Columns
          <div className="mt-2 flex flex-col gap-3">
            {columns.map((columnText, index) => (
              <div key={index} className="flex gap-4 items-center">
                <Input
                  value={columnText}
                  placeholder="e.g. Make coffee"
                  onChange={(e) =>
                    setColumns((previousState) =>
                      previousState.map((previousSubtask, previousIndex) => {
                        if (index === previousIndex) {
                          return e.target.value;
                        }
                        return previousSubtask;
                      })
                    )
                  }
                />
                <button
                  onClick={() => {
                    setColumns((previousState) =>
                      previousState.filter(
                        (_, previousIndex) => previousIndex !== index
                      )
                    );
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                  >
                    <rect
                      x="12.728"
                      width="3"
                      height="18"
                      transform="rotate(45 12.728 0)"
                      fill="#828FA3"
                    />
                    <rect
                      y="2.12134"
                      width="3"
                      height="18"
                      transform="rotate(-45 0 2.12134)"
                      fill="#828FA3"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </label>
        <Button
          variant="secondary"
          onClick={(e) => {
            setColumns((previousState) => [...previousState, ""]);
          }}
        >
          + Add New Column
        </Button>
        <Button onClick={handleSubmit}>Create New Board</Button>
      </div>
    </>
  );
}
