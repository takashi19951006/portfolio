"use client";
import React, { useRef } from "react";
import { AiFillBulb, AiFillInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wbzn67o", "template_dz4xi8e", form.current, {
        publicKey: "0Ikzdxt6dpRfgE656",
      })
      .then(
        () => {
          alert('メール送信完了しました');
        },
        (error) => {
          console.log("メール送信失敗しました", error.text);
        }
      );
  };
  return (
    <section
      className="w-full h-fit px-[40px] md:py-[20px] lg:pb-[40px] lg:pt-[10px] py-[10px] max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto ">
        {/*セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 flex rounded-full items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>
        {/*左 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>
              お仕事の依頼がある方はこちらからどうぞ。SNSのDMからの連絡も可能です。
            </p>
            <p className="mt-12">連絡先はこちら</p>
            <h4 className="text-lg font-medium text-darkblue">
              fujit4653.gmail.com
            </h4>
            {/*sns*/}
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5>SNS</h5>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/takadaimiku?igsh=MTY4a2w4c2Q2ODh2cQ=="
                    className="text-2xl"
                  >
                    <AiFillInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*右 メールフォーム*/}
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                id="name"
                placeholder="お名前"
                name="name"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="email"
                id="name"
                placeholder="ご自身のメールアドレス"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="text"
                id="subject"
                placeholder="件名"
                name="subject"
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <textarea
                name="message"
                id="message"
                placeholder="用件"
                row={"7"}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-3 mb-4 leading-tight focus:outline-cadetblue"
              />
              <div>
                <button
                  className="flex justify-end bg-blue-500 text-white font-medium py-3 px-6 rounded hover:shadow hover:bg-darkblue "
                  type="submit"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
