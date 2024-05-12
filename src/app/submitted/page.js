"use client"
import { Suspense} from "next/navigation";
import { useSearchParams } from "next/navigation";
import "./submitted.css";

export default function Submitted() {
  const searchParams = useSearchParams();
  // const name  =searchParams.get("name");
  // const email  =searchParams.get("email");
  // const message =searchParams.get("message");

  return (
    
    <div className='Submitted-data'>
      <h1>Submitted Data</h1>
      <Suspense  fallback={<div>Loading...</div>}>
      <p>Name: {searchParams.get("name")}</p>
      <p>Email: {searchParams.get("email")}</p>
      <p>Message: {searchParams.get("message")}</p>
      </Suspense>
    </div>
  );
}
