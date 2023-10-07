import Aside from "@/components/Aside";
import Header from "@/components/Header";
import Board from "@/components/ui/Board";

export default function Home() {

  return (
    <div className="grid-custom-columns h-screen md:grid overflow-hidden">
      <Aside />
      <div>
        <Header />
        <Board />
      </div>
    </div>
  );
}
