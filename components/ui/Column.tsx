import { Column, ColumnWithTasks } from "@/types";
import Task from "./Task";
import { useContext } from "react";
import { BoardContext, BoardDispatchContext } from "@/providers";
import { ActionType } from "@/store/actions";
import { findAfterElement } from "@/utils";

export default function Column({ column }: { column: ColumnWithTasks }) {
  const columnColor = Math.floor(Math.random() * 16777215).toString(16);
  const dispatch = useContext(BoardDispatchContext);
  const { taskIdBeingDragged } = useContext(BoardContext);

  const columnsTaskSortedInOrder = column.tasks.sort(
    (a, b) => a.order - b.order
  );

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();

    if (!taskIdBeingDragged) return;

    const columnContainer = e.currentTarget;
    const afterElement = findAfterElement(columnContainer, e.clientY);

    const taskIdsOrder = columnsTaskSortedInOrder.map((task) => task.id);
    const draggingTaskIndex = taskIdsOrder.indexOf(taskIdBeingDragged);

    // Remove the dragged task from its original position
    taskIdsOrder.splice(draggingTaskIndex, 1);

    if (afterElement) {
      const afterTaskId = Number((afterElement as HTMLElement).dataset.taskId);
      // If the afterElement is the currently dragged item, we don't want to do anything.
      // Otherwise, there will be a lot of flickering and functionality will not work as expected.
      if (afterTaskId === taskIdBeingDragged) return;

      const afterTaskIndex = taskIdsOrder.indexOf(afterTaskId);

      // Insert the dragged task after the target task
      taskIdsOrder.splice(afterTaskIndex, 0, taskIdBeingDragged);
    } else {
      // If no target element, append the task to the end
      taskIdsOrder.push(taskIdBeingDragged);
    }

    dispatch({
      type: ActionType.MoveTask,
      payload: {
        toColumnId: column.id,
        taskIdsInOrder: taskIdsOrder,
      },
    });
  };

  const handleOnDrop = (e: React.DragEvent) => {
    dispatch({
      type: ActionType.SetTaskBeingDragged,
      payload: null,
    });
  };

  return (
    <div
      className="text-black dark:text-white w-[280px] min-w-[280px]"
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
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
        {columnsTaskSortedInOrder.map((task) => (
          <Task key={task.id} column={column} task={task} />
        ))}
      </ul>
    </div>
  );
}
