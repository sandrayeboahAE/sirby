import Image from "next/image";
import { Inter } from "next/font/google";
import { Footer, Navbar } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
}
