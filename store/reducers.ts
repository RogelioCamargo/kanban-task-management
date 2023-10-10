import { Task } from "@/types";
import {
  ActionType,
  BoardActions,
  InitialStateType,
  MoveTask,
  SelectBoard,
  SetTaskBeingDragged,
  ToggleSubTask,
  UpdateTaskStatus,
} from "./actions";

export function boardReducer(state: InitialStateType, action: BoardActions) {
  switch (action.type) {
    case ActionType.SelectBoard:
      return selectBoard(state, action);

    case ActionType.MoveTask:
      return moveTask(state, action);

    case ActionType.UpdateTaskStatus:
      return updateTaskStatus(state, action);

    case ActionType.ToggleSubTask:
      return toggleSubtask(state, action);

    case ActionType.SetTaskBeingDragged:
      return setTaskBeingDragged(state, action);

    default:
      return state;
  }
}

function selectBoard(state: InitialStateType, action: SelectBoard) {
  const boardSelected = state.boards.find(
    (board) => board.id === action.payload.id
  );
  if (!boardSelected) return state;

  return {
    ...state,
    board: boardSelected,
  };
}

function moveTask(state: InitialStateType, action: MoveTask) {
  const { taskIdsInOrder, toColumnId } = action.payload;

  const taskMap = taskIdsInOrder.reduce((map, taskId, index) => {
    map[taskId] = index;
    return map;
  }, {} as Record<number, number>);

  const updatedTasks = state.tasks.map((task) => {
    if (task.id in taskMap) {
      return {
        ...task,
        order: taskMap[task.id],
        columnId: toColumnId,
      };
    } else {
      return task;
    }
  });

  return {
    ...state,
    tasks: updatedTasks,
  };
}

function updateTaskStatus(state: InitialStateType, action: UpdateTaskStatus) {
  const { payload: taskToUpdate } = action;
  const { board, columns: stateColumns } = state;
  if (!board) return state;

  const columns = stateColumns.filter((column) => column.boardId === board.id);
  const column = columns.find((column) => column.name === taskToUpdate.status);
  if (!column) return state;

  const newTasks = state.tasks.map((task) => {
    if (task.id === taskToUpdate.id) {
      return {
        ...taskToUpdate,
        columnId: column.id,
      };
    }
    return task;
  });

  return {
    ...state,
    tasks: newTasks,
  };
}

function toggleSubtask(state: InitialStateType, action: ToggleSubTask) {
  const { payload: subtaskId } = action;

  const newSubtasks = state.subtasks.map((subtask) => {
    if (subtask.id === subtaskId) {
      return {
        ...subtask,
        isCompleted: !subtask.isCompleted,
      };
    }

    return subtask;
  });

  return {
    ...state,
    subtasks: newSubtasks,
  };
}

function setTaskBeingDragged(
  state: InitialStateType,
  action: SetTaskBeingDragged
) {
  return {
    ...state,
    taskIdBeingDragged: action.payload,
  };
}
