"use client";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useMenuStore } from "@/store/useMenuStore";

function SideMenu() {
  const { isOpen, closeMobleManu } = useMenuStore();
  return (
    <section className={`fixed left-0 top-0 z-50 flex h-screen max-w-[300px] flex-col justify-between py-10 px-[20px] lg:px-[80px] max-lg:max-w-[146px] bg-white border-r
      ${isOpen ? 'max-lg:block' : 'max-md:hidden'}`}>
        <div className="flex w-full flex-1 flex-col gap-10 justify-between items-center">
        {/*上 */}
        <div className="flex justify-center flex-col gap-2">
          <img src="/assets/準備中.png" width={100} height={100} />
          <p className="font-bold text-darkblue">サイドメニューは作成途中です</p>
          {/*中 */}

          {/*下 */}
          <div className="flex-col items-center text-center">
            <div className="flex flex-col lg:flex-row gap-4 mb-3">
              <a
                href="/"
                target="_blank"
                className="bg-darkblue p-2 rounded-full cursor-pointer text-white hover:bg-slate-400　"
              >
                <AiFillGithub />
              </a>
              <p className="lg:hidden">copyright © 2024 fujiki takashi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideMenu;
