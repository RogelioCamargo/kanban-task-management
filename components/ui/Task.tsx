import { ColumnWithTasks, Task, TaskWithSubtasks } from "@/types";
import { useContext, useState } from "react";
import TaskDetails from "./TaskDetails";
import { BoardContext, BoardDispatchContext } from "@/providers";
import { ActionType } from "@/store/actions";

export default function Task({
  task,
  column,
}: {
  task: TaskWithSubtasks;
  column: ColumnWithTasks;
}) {
  const [openDetails, setOpenDetails] = useState(false);
  const dispatch = useContext(BoardDispatchContext);
  const { taskIdBeingDragged } = useContext(BoardContext);

  const closeDetails = () => {
    setOpenDetails(false);
  };

  const numberTasksCompleted = task.subtasks.filter(
    (subtask) => subtask.isCompleted
  );

  const handleOnDragStart = (e: React.DragEvent, task: Task) => {
    dispatch({
      type: ActionType.SetTaskBeingDragged,
      payload: task.id,
    });
  };

  return (
    <>
      <li
        className={[
          "task w-[280px] cursor-pointer hover:text-primary px-4 py-6 bg-white dark:bg-gray-500 rounded-lg font-bold",
          taskIdBeingDragged === task.id ? "dragging" : "",
        ].join(" ")}
        draggable
        data-task-id={task.id}
        onDragStart={(e) => handleOnDragStart(e, task)}
        onClick={() => setOpenDetails(true)}
      >
        <h3 className="mb-2">{task.title}</h3>
        <p className="text-sm text-gray-300">
          {numberTasksCompleted.length} of {task.subtasks.length} subtasks
        </p>
      </li>
      {openDetails ? (
        <TaskDetails task={task} closeDetails={closeDetails} />
      ) : null}
    </>
  );
}
