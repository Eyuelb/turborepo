import Image from "next/image";
import { Card } from "ui";
import MantineTestPage from "./test-page";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  );
}


export default function Page(): JSX.Element {
  return (
    <main>
      <MantineTestPage/>

    </main>
  );
}
