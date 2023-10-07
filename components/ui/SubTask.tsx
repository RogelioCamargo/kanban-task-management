import { SubTask } from "@/types";

export default function SubTask({ subtask }: { subtask: SubTask }) {
  return (
    <li className="bg-gray-100 dark:bg-gray-600 px-3 py-4">
      <label className="container flex items-center gap-4">
        <span
          className={[
            subtask.isCompleted
              ? "line-through text-gray-300"
              : "text-black dark:text-white",
          ].join(" ")}
        >
          {subtask.title}
        </span>
        <input
          type="checkbox"
          checked={subtask.isCompleted}
          onChange={() => console.log("update checkbox")}
        />
        <span className="checkmark bg-white dark:bg-gray-500 border-gray-200 dark:border-gray-400 border"></span>
      </label>
    </li>
  );
}
