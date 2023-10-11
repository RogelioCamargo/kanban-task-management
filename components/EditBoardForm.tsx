import BoardForm from "./BoardForm";

export default function EditBoardForm({
  board,
  closeForm,
}: {
  board: {
    id: number;
    name: string;
    columns: {
      id: number;
      name: string;
    }[];
  };
  closeForm: () => void;
}) {
  const initialColumns = board.columns.map((column) => column.name);

  return (
    <BoardForm
      closeForm={closeForm}
      initialColumns={initialColumns}
      initialName={board.name}
    />
  );
}
