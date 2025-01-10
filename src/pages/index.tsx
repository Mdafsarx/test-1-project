import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/Card/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
type data = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type HomeProps = {
  data: data[];
};

export default function Home({ data }: HomeProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} max-w-7xl mx-auto py-20 grid grid-cols-5 gap-8`}>
      {
        data?.map((d, i) => <Card key={i} title={d?.title} id={d?.id} />)
      }
    </div>
  );
}

export const getStaticProps = (async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: { data }
  }
})
