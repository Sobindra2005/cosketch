import Image from "next/image";
import Tools from "@/components/tools";
import Color from "@/components/color";
import Participants from "@/components/participants";
export default function Home() {
  return (
    <div className="flex justify-between ">
      <div className="fixed left-2 "><Tools /></div>
      
      <div className=" fixed right-2  ">
        <Color />
        <Participants/>
      </div>
    </div>
  );
}
