"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold">Elective Selection</h1>
      <div>
        <Link href="/">
          <a className="px-4">Home</a>
        </Link>
        <Link href="/otp">
          <a className="px-4">OTP</a>
        </Link>
      </div>
    </nav>
  );
}
