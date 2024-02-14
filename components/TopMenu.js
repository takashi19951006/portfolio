"use client";
import React from "react";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { useMenuStore } from "@/store/useMenuStore";

function TopMenu() {
  const { isOpen, openMobleMenu } = useMenuStore();
  const dl = ()=>{
    alert('ダウンロードできるとは言っていない');
  }
  return (
    <section
      className="px-[40px] bg-whitesmoke py-4 z-10 max-xs:px-5"
      id="home"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center gap-5">
        {/*上 */}
        <div className="flex justify-between items-center w-full md:hidden">
        <Link href={"/"}>
        <h1 className="font-bold text-3xl text-cadetblue">PaleTech</h1>
        </Link>
        {/*トグル */}
        <div className="text-2xl z-50 lg:hidden" onClick={openMobleMenu}>
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </div>
        </div>
          {/*下 */}
        <div className="flex justify-between w-full items-center max-xs:flex-col max-xs:items-start max-xs:gap-2">
          <Link href={"#contact"}>
          <div className="flex flex-row gap-2 items-center text-lg font-bold">
            <MdOutlineMailOutline />
            <span className="text-darkblue text-xl pb-1">fujit4653.gmail.com</span>
          </div>
          </Link>
          <button className="bg-darkblue text-white px-4 py-1 rounded-md hover:bg-darkblue/75" onClick={dl}>
            資料ダウンロード
          </button>
        </div>
        </div>
    </section>
  );
}

export default TopMenu;
