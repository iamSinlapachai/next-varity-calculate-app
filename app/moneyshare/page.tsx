"use client"; //use client"; //คือการกำหนดให้ component นี้เป็น Client Component

import Image from "next/image";
import money from "./../../assets/images/money.png";
import calculator from "./../../assets/images/calculator.png";
import Footer from "@/component/footer";
import { useState } from "react";

import Link from "next/link";

export default function Page() {
  const [moneyInput, setMoney] = useState("");
  const [person, setPerson] = useState("");
  const [moneyShare, setMoneyShare] = useState("0.00");
  const handleCalClick = () => {
    //ตรวจสอบว่าผู้ใช้กรอกข้อมูลครบหรือไม่
    if (moneyInput == "" || person == "" || person == "0") {
      alert("กรุณาป้อนข้อมูลให้ครบ/ถูกต้อง");
      return;
    }

    if (isNaN(parseFloat(moneyInput)) || isNaN(parseInt(person))) {
      alert("กรุณาป้อนจำนวนเงินและจำนวนคนเป็นตัวเลข เท่านั้น");
      return;
    }

    let result = parseFloat(moneyInput) / parseInt(person);
    setMoneyShare(result.toFixed(2));
  };
  const handleCancelClick = () => {
    setMoney("");
    setPerson("");
    setMoneyShare("0.00");
  };

  return (
    <>
      <div
        className="w-1/2 border-gray-500 mx-auto mt-20 p-20 mb-20 
      flex flex-col items-center rounded-2xl shadow-xl"
      >
        <Image src={calculator} alt="calculator" width={100} />
        <h1 className="text-lg text-blue-600 font-bold mt-3">
          Varity Calculator V.1.0
        </h1>
        <h1 className="text-lg text-blue-600 mt-1 mb-5">โปรแกรมคำนวณ</h1>
        <div className="w-full border border-gray-300 flex flex-col items-center p-5 rounded-xl">
          <Image src={money} alt="money" width={50} />
          <h1 className="text-lg text-blue-600 mt-1 mb-5"> แชร์เงินกันเถอะ</h1>

          <div className="w-full flex flex-col mt-3">
            <label>ป้อนเงิน</label>
            <input
              type="text"
              value={moneyInput}
              onChange={(e) => setMoney(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <div className="w-full flex flex-col mt-3 ">
            <label htmlFor="">ป้อนคน</label>
            <input
              type="text"
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />
          </div>

          <button
            onClick={handleCalClick}
            className="w-full text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl mt-5 cursor-pointer"
          >
            คำนวณ
          </button>
          <button
            onClick={handleCancelClick}
            className="w-full text-lg bg-orange-500 hover:bg-orange-700 text-white font-bold px-5 py-2 rounded-xl mt-5 cursor-pointer"
          >
            ยกเลิก
          </button>
          <div className="w-full flex justify-center items-center mt-5 text-center">
            <span>หารกันคนละ</span>
            <span className="font-bold text-2xl text-red-500 mx-10">
              {moneyShare}
            </span>
            <span>บาท</span>
          </div>
        </div>
        <Link
          href="/menu"
          className= "text-blue-500 hover:text-blue-700 font-bold mt-5"
        >
          กลับไปหน้าเมนู
        </Link>
      </div>

      <Footer />
    </>
  );
}
