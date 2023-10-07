import { Task } from "@/types";

export default function Task({ task }: { task: Task }) {
  return (
    <li
      className="w-[280px] px-4 md:px-6 py-6 bg-white dark:bg-gray-500 rounded-lg font-bold"
      draggable
    >
      <h4 className="mb-2">{task.title}</h4>
      <p className="text-sm text-gray-300">
        0 of {task.subtasks.length} subtracks
      </p>
    </li>
  );
}
