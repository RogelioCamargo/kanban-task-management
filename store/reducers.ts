import {
  ActionType,
  BoardActions,
  InitialStateType,
  MoveTask,
  SelectBoard,
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
