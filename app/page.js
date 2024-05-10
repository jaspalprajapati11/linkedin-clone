import Image from "next/image";
import Navbar from "./components/Common/navbar";
import Sidebar from "./components/Home/sidebar";
import Feedpage from "./components/Home/feedpage";
import RightSidebar from "./components/Home/rightsidebar";


export default function Home() {
  return (
    <div className="flex flex-col bg-stone-200 min-h-screen">
      <nav className="bg-white sticky top-0">
        <Navbar />
      </nav>
      <div className="flex w-full justify-center mt-3">
        <div className=" w-11/12 h-screen flex justify-between">
          <div className="border basis-86 pl-2">
            <Sidebar />
          </div>
          <div className="grow ml-5">
            <Feedpage />
          </div>
          <div className="basis-96 ml-5"> 
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
