import { ActionType, BoardActions, InitialStateType, MoveTask, SelectBoard, ToggleSubTask, UpdateTask } from "./actions";

export function boardReducer(state: InitialStateType, action: BoardActions) {
  switch (action.type) {
    case ActionType.SelectBoard:
      return selectBoard(state, action);

    case ActionType.MoveTask:
      return moveTask(state, action);

    case ActionType.UpdateTask:
      return updateTask(state, action);

    case ActionType.ToggleSubTask:
      return toggleSubtask(state, action);

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
  const { taskToMove, fromColumnId, toColumnId } = action.payload;
  const column = state.columns.find((column) => column.id === toColumnId);

  if (!column) return state;

  const newTaskss = state.tasks.map((task) => {
    if (task.id === taskToMove.id) {
      return {
        ...taskToMove,
        columnId: toColumnId,
        status: column.name,
      };
    }
    return task;
  });

  return {
    ...state,
    tasks: newTaskss,
  };
}

function updateTask(state: InitialStateType, action: UpdateTask) {
  const { payload: taskToUpdate } = action;
  const newTasks = state.tasks.map((task) => {
    if (task.id === taskToUpdate.id) {
      return taskToUpdate;
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
