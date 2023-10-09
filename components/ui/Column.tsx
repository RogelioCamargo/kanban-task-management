import { Column, ColumnWithTasks } from "@/types";
import Task from "./Task";
import { useContext } from "react";
import { BoardDispatchContext } from "@/providers";
import { ActionType } from "@/store/actions";

export default function Column({
  column,
}: {
  column: ColumnWithTasks;
}) {
  const columnColor = Math.floor(Math.random() * 16777215).toString(16);
  const dispath = useContext(BoardDispatchContext);

  const handleOnDrop = (e: React.DragEvent) => {
    const { taskToMove, fromColumnId } = JSON.parse(e.dataTransfer.getData("task"));
    dispath({
      type: ActionType.MoveTask,
      payload: {
        fromColumnId,
        toColumnId: column.id,
        taskToMove,
      },
    });
  };

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="text-black dark:text-white w-[280px] min-w-[280px]"
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
    >
      <div className="flex gap-2 items-center mb-6">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: `#${columnColor}` }}
        ></div>
        <h2 className="text-xs uppercase font-bold tracking-[2.4px]">
          {column.name} ({column.tasks.length})
        </h2>
      </div>
      <ul className="flex flex-col gap-5 pb-10">
        {column.tasks.map((task) => (
          <Task key={task.id} column={column} task={task} />
        ))}
      </ul>
    </div>
  );
}
