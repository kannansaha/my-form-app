"use client"
import { useSearchParams} from 'next/navigation';
import "./submitted.css";

export default function Submitted() {
  const searchParams = useSearchParams();
  const name  =searchParams.get("name");
  const email  =searchParams.get("email");
  const message =searchParams.get("message");



  return (
    <div className='Submitted-data'>
      <h1>Submitted Data</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
