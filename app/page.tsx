import Header from "@/components/Header"
import Button from "@/components/ui/Button"

export default function Home() {
  return (
    <>
			<Header />
			<main className="h-[calc(100% - 64px)] p-3 text-center flex flex-col items-center justify-center gap-6 lg:gap-10">
				<p className="text-lg font-bold">This board is empty. Create a new column to get started.</p>
				<Button>+ Add New Column</Button>
			</main>
    </>
  )
}
