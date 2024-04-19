import Image from "next/image";
import Navbar from "../components/Common/navbar";
import Sidebar from "../components/Home/sidebar";
import Feedpage from "../components/Home/feedpage";
import RightSidebar from "../components/Home/rightsidebar";

export default function Home() {
  return (
    <div className="flex flex-col border h-full">
      <div>
        <Navbar />
      </div>
      <div className="flex bg-stone-200	h-ful">
        <div className=" basis-80">
          <Sidebar/>
        </div>
        <div className="grow">
          <Feedpage/>
        </div>
        <div className="basis-96">
          <RightSidebar/>
        </div>
      </div>
    </div>
  );
}
