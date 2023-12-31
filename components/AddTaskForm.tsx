import { useContext, useState } from "react";
import { BoardContext } from "@/providers";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { Board, Column } from "@/types";
import { CancelIcon } from "./ui/Icons";

export default function AddTaskForm({
  board,
  closeForm,
}: {
  board: Board;
  closeForm: () => void;
}) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "",
  });
  const [subtasks, setSubtasks] = useState([""]);
  const { columns: stateColumns } = useContext(BoardContext);

  let columns: Column[] = [];
  if (board) {
    columns = stateColumns
      .filter((column) => column.boardId === board.id)
      .sort((a, b) => a.order - b.order);
  }

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
        <h4 className="text-lg">Add New Task</h4>
        <label>
          Title
          <Input
            name="title"
            value={task.title}
            placeholder="e.g. Take a coffee break"
            onChange={(e) =>
              setTask((previousState) => ({
                ...previousState,
                title: e.target.value,
              }))
            }
          />
        </label>
        <label>
          Description
          <textarea
            value={task.description}
            name="description"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will "
            className="block w-full py-2 px-4 rounded-md dark:bg-gray-500 border dark:border-gray-400 mt-2 placeholder-gray-300"
            onChange={(e) =>
              setTask((previousState) => ({
                ...previousState,
                description: e.target.value,
              }))
            }
          ></textarea>
        </label>
        <label>
          Subtasks
          <div className="mt-2 flex flex-col gap-3">
            {subtasks.map((subtaskText, index) => (
              <div key={index} className="flex gap-4 items-center">
                <Input
                  value={subtaskText}
                  placeholder="e.g. Make coffee"
                  onChange={(e) =>
                    setSubtasks((previousState) =>
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
                    setSubtasks((previousState) =>
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
          onClick={(e) => {
            setSubtasks((previousState) => [...previousState, ""]);
          }}
        >
          + Add New Subtask
        </Button>
        <label className="flex flex-col gap-2">
          Current Status
          <div className="custom-select bg-white dark:bg-gray-500 border-gray-200 dark:border-gray-400 border rounded-sm">
            <select
              className="px-4 py-2 font-normal"
              name="status"
              value={task.status}
              onChange={(e) =>
                setTask((previousState) => ({
                  ...previousState,
                  status: e.target.value,
                }))
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
        <Button onClick={handleSubmit}>Create Task</Button>
      </div>
    </>
  );
}
