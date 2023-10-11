import BoardForm from "./BoardForm";

export default function CreateBoardForm({
  closeForm,
}: {
  closeForm: () => void;
}) {
  return (
    <BoardForm
      closeForm={closeForm}
      initialColumns={["Todo", "Doing"]}
      initialName={""}
    />
  );
}
