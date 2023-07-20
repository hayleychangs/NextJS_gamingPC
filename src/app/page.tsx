import Slider from "./components/Slider";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
       <h2 className="text-lg font-bold">Best Seller Gaming PC</h2>
       <h4 className="text-base font-bold">Prebuild & Custom</h4>
      </div>
      <Slider />
    </main>
  )
}