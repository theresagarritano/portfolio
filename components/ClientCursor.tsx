"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr:false must live inside a client component
const Cursor = dynamic(() => import("./Cursor"), { ssr: false });

export default function ClientCursor() {
  return <Cursor />;
}
