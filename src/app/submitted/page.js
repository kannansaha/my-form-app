"use client"
import { useSearchParams} from 'next/navigation';

export default function Submitted() {
  const searchParams = useSearchParams();
  const {name,email,message}  =searchParams.get("formData");

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}
