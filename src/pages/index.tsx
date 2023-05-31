import { useRef } from "react";
import { VT323 } from "next/font/google";
import Background from "@/comps/home/background/Background";

const vt = VT323({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main style={vt.style} className={`h-[3000vh] w-full`}>
      <Background />
    </main>
  );
}
