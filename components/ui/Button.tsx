export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary hover:bg-primary-hover font-bold text-white py-2.5 px-5 rounded-full">
      {children}
    </button>
  );
}
