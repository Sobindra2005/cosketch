import Image from "next/image";
import Tools from "@/components/tools";
import Color from "@/components/color";
import Participants from "@/components/participants";
export default function Home() {
  return (
    <div className="flex justify-between ">
      <Tools />
      <div className=" ">
        <Color />
        <Participants/>
      </div>
    </div>
  );
}
