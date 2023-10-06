export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary font-bold py-2.5 px-5 rounded-full">
      {children}
    </button>
  );
}