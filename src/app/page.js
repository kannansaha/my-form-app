
"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <h1>hello NextJs</h1>
         <Link href="/form">form</Link>
         <Link href="/submitted">submitted</Link>

         </main>
  );
}
