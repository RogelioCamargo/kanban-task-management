import { useContext, useState } from "react";
import EditBoardForm from "../EditBoardForm";
import { BoardContext } from "@/providers";

export default function AddColumn() {
  const { board: selectedBoard, columns } = useContext(BoardContext);
  const [openEditBoardForm, setOpenEditBoardForm] = useState(false);

  if (!selectedBoard) return null;

  const boardColumns = columns.filter(
    (column) => column.boardId === selectedBoard.id
  );
  const board = {
    ...selectedBoard,
    columns: boardColumns,
  };

  const closeForm = () => {
    setOpenEditBoardForm(false);
  };

  return (
    <>
      <button
        className="w-[280px] h-full text-center text-[24px] font-bold text-gray-300 hover:text-primary cursor-pointer bg-gray-200 dark:bg-gray-500 flex justify-center items-center rounded-md"
        onClick={() => setOpenEditBoardForm(true)}
      >
        + New Column
      </button>
      {openEditBoardForm ? (
        <EditBoardForm board={board} closeForm={closeForm} />
      ) : null}
    </>
  );
}
