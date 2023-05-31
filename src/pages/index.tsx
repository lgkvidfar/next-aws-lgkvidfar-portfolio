import { useRef } from "react";
import { VT323 } from "next/font/google";
import Background from "@/comps/home/background/Background";

const vt = VT323({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const pageRef = useRef(null);

  return (
    <main
      ref={pageRef}
      style={vt.style}
      className={`relative flex h-full w-full flex-col items-center justify-center`}
    >
      <Background />
      <div className="h-[3000vh] w-full"></div>
    </main>
  );
}
