import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold text-red-500">Welcome to Next.js!</h1>
      <ul className="flex gap-2">
        <Link className="hover:text-zinc-600" href={'/about'}>Soubre</Link>
        <Link className="hover:text-zinc-600" href={'/blog'}>Blog</Link>
      </ul>
      <Image 
      alt="Image NEXTJS"
      className="mt-4"
      src={'/next.svg'}
      width={250}
      height={250}/>
    </main>
  );
}
