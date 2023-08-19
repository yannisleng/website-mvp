import Head from "next/head";
import Carousel from "~/components/Carousel/Carousel";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Website MVP</title>
        <meta name="description" content="Just a MVP for CYC website" />
        <link rel="icon" href="/images/cyc_logo.png" />
      </Head>
      <main className="flex flex-col">
        <Carousel />
      </main>
    </>
  );
}
