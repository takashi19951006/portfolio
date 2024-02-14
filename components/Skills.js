import React from "react";
import { AiFillBulb } from "react-icons/ai";

function Skills() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:@x-[20px] relative bg-white"
      id="sk"
    >
      <div className="max-w-7xl mx-auto">
        {/*セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-5">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            使用言語・ツール
          </p>
        </div>
        {/*gグリッドレイアウト*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1">
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/python.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/html.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>HTML/CSS</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/next_js.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/java.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>Java</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/docker.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>Docker</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/k8s.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>k8s</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/git.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>Github/GitLab</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <img
              src="/assets/aws.png"
              height={100}
              weight={100}
              className="mb-2"
            />
            <span>AWS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
