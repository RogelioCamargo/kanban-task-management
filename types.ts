export interface SubTask {
  title: string;
  isCompleted: boolean;
}

export interface Task {
  title: string;
  description: string;
  status: string;
  subtasks: SubTask[];
}

export interface Column {
  name: string;
  tasks: Task[];
}
