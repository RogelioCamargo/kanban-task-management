import { Column } from "@/types";
import Task from "./Task";
import AddColumn from "./AddColumn";

export default function Column({ column }: { column: Column }) {
  const columnColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div className="text-black dark:text-white">
      <div className="flex gap-2 items-center mb-6">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: `#${columnColor}` }}
        ></div>
        <h3 className="text-xs uppercase tracking-[2.4px]">
          {column.name} ({column.tasks.length})
        </h3>
      </div>
      <ul className="flex flex-col gap-5">
        {column.tasks.map((task) => (
          <Task key={task.title} task={task} />
        ))}
      </ul>
    </div>
  );
}
