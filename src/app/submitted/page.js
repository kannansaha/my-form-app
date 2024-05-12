"use client"
import { Suspense} from "react";
import { useSearchParams } from "next/navigation";
import "./submitted.css";

export default function Submitted() {
  const searchParams = useSearchParams();
  // const name  =searchParams.get("name");
  // const email  =searchParams.get("email");
  // const message =searchParams.get("message");

  return (
    <Suspense  fallback={<div>Loading...</div>}>
    <div className='Submitted-data'>
      <h1>Submitted Data</h1>
      <p>Name: {searchParams.get("name")}</p>
      <p>Email: {searchParams.get("email")}</p>
      <p>Message: {searchParams.get("message")}</p>
    </div>
    </Suspense>
  );
}
