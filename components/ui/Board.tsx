import { boards } from "@/data";
import AddColumn from "./AddColumn";
import Column from "./Column";
import Button from "./Button";

export default function Board() {
  const board = boards[0];

  if (boards.length === 0) {
    return (
      <main className="p-3 text-center text-gray-300 flex flex-col items-center justify-center gap-6 lg:gap-8 bg-gray-100 dark:bg-gray-600">
        <p className="text-lg font-bold">
          This board is empty. Create a new column to get started.
        </p>
        <Button>+ Add New Column</Button>
      </main>
    );
  }
  return (
    <main className="bg-gray-100 dark:bg-gray-600 px-4 py-6 flex gap-6 overflow-scroll">
      {board.columns.map((column) => (
        <Column key={board.name} column={column} />
      ))}
      <div className="py-[40px]">
        <AddColumn />
      </div>
    </main>
  );
}
