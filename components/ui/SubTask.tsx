import { SubTask } from "@/types";

export default function SubTask({ subtask }: { subtask: SubTask }) {
  return (
    <li className="bg-gray-600 px-3 py-4">
      <label className="flex items-center gap-4">
        <input type="checkbox" />
        {subtask.title}
      </label>
    </li>
  );
}
