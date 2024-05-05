"use client";
// hooks
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/ru/');
  }, []);

  return null;
}