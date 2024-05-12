"use client"
import React from "react";

import { useRouter } from 'next/router';

export default function Submitted() {
  const router = useRouter();
  const { name, email, message } = router.query;

  return (
    <div>
       <h1>Submitted Data</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p> 

    </div>
  );
}
