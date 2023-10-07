import Aside from "@/components/Aside";
import Header from "@/components/Header";
import AddColumn from "@/components/ui/AddColumn";
import Button from "@/components/ui/Button";
import Column from "@/components/ui/Column";
import { boards } from "@/data";

export default function Home() {
  const board = boards[0];

  return (
    <div className="grid-custom-columns h-screen md:grid overflow-hidden">
      <Aside />
      <div>
        <Header />
        {/* <main className="p-3 text-center text-gray-300 flex flex-col items-center justify-center gap-6 lg:gap-8 bg-gray-100 dark:bg-gray-600">
					<p className="text-lg font-bold">
						This board is empty. Create a new column to get started.
					</p>
					<Button>+ Add New Column</Button>
				</main> */}
        <main className="bg-gray-100 dark:bg-gray-600 px-4 py-6 flex gap-6 overflow-scroll">
          {board.columns.map((column) => (
            <Column key={board.name} column={column} />
          ))}
					<div className="pt-[40px]">
						<AddColumn />
					</div>
        </main>
      </div>
    </div>
  );
}
