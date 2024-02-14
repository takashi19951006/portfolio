import React from "react";
import { AiFillBulb } from "react-icons/ai";

function About() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/*セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span className="mb-1">
              <AiFillBulb className="w-4 h-4" />
            </span>
            自己紹介
          </p>
        </div>
        {/*メイン分 */}
        <div className="mt-7 ">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
            福岡出身の28歳です。趣味は登山、キャンプ、サウナ、シーシャ、サイクリング、筋トレ等多岐に渡ります。
            興味関心はアンチエイジング、健康、資産運用、仮想通貨等。好きな本は鈴木祐さんの「無」「最高の体調」です。
            普段はフルリモートのPythonエンジニアとして某大学の人工知能研究の支援を行っています。元福岡の大手地方銀行勤務。最近一番会話する相手はChatGPT。
          </p>
        </div>
        {/*軽い実績 */}
        <div className="mt-10">
          <div className="w-full">
            <ul className="flex justify-between gap-10 flex-col md:flex-row">
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold ">
                    3year+
                  </h3>
                  <span>実務経験</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold ">
                    10+
                  </h3>
                  <span>累計参加プロジェクト</span>
                </div>
              </li>
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold ">
                    ￥600,000+
                  </h3>
                  <span>現在のプロジェクト月単価</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
