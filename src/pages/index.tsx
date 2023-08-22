import Carousel from "~/components/Carousel/Carousel";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <main className="flex flex-col">
        <Carousel />
      </main>
    </>
  );
}
