export interface SubTask {
	id: number,
  title: string;
  isCompleted: boolean;
}

export interface Task {
	id: number,
  title: string;
  description?: string;
  status: string;
  subtasks: SubTask[];
}

export interface Column {
	id: number,
  name: string;
  tasks: Task[];
}

export interface Board {
	id: number,
	name: string,
  columns: Column[];
}

export enum ActionType {
	AddBoard,
	SelectBoard
}

export interface AddBoard {
	type: ActionType.AddBoard,
	payload: {
		name: string,
		columns: string[]
	}
}

export interface SelectBoard {
	type: ActionType.SelectBoard,
	payload: number;
}

export type BoardActions = AddBoard | SelectBoard;