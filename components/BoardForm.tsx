import React, { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { CancelIcon } from "./ui/Icons";

function BoardForm({
  closeForm,
  initialName,
  initialColumns,
}: {
  closeForm: () => void;
  initialName: string;
  initialColumns: string[];
}) {
  const [name, setName] = useState(initialName);
  const [columns, setColumns] = useState(initialColumns);

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
            placeholder="e.g. Web Design"
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
                  placeholder="e.g. Todo"
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
                  <CancelIcon />
                </button>
              </div>
            ))}
          </div>
        </label>
        <Button
          variant="secondary"
          onClick={() => {
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

export default BoardForm;
