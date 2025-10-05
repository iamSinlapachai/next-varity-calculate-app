"use client"; //คือการกำหนดให้ component นี้เป็น Client Component

import Footer from "@/component/footer";
import Image from "next/image";
import calculator from "./../assets/images/calculator.png";
import { useState } from "react";

export default function HomePage() {

  //สร้าง State สำหรับเก็บค่ารหัสเข้าใช้งาน
  const [ucode, setUcode] = useState("");

  const handleAccessWebClick = () => {
    //ตรวจสอบว่าผู้ใช้กรอกรหัสเข้าใช้งานหรือไม่
    if (ucode === "") {
      alert("กรุณาป้อนรหัสเข้าใช้งาน");
      return;
    }
    if (ucode !== "sau") {
      alert("รหัสเข้าใช้งานไม่ถูกต้อง");
      return;
    }
    if (ucode.toLowerCase() == "sau") {
      window.location.href = "/menu"; //เปลี่ยนเส้นทางไปยังหน้า /menu
    }
  }

  return (
    <>
      <div
        className="w-6/12 border-gray-500 mx-auto mt-20 p-20
      flex flex-col items-center rounded-2xl shadow-xl"
      >
        <Image src={calculator} alt="calculator" width={200} />
        <h1 className="text-3xl text-blue-600 font-bold mt-5">
          Varity Calculator V.1.0
        </h1>
        <h1 className="texxt-3xl text-blue-600 mt-2 mb-5">โปรแกรมคำนวณ</h1>
        <div className="flex flex-col w-full">
          <label className="mb-2">ป้อนรหัสเข้าใช้งาน <span className="text-green-500">(ชื่อย่อ ม.เอเชีย)</span> </label>
          <input value={ucode} onChange={(e) => setUcode(e.target.value)} className="border border-gray-500 rounded p-2" type="text" />
        </div>

        <button
          type="button" onClick={ handleAccessWebClick }
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mt-5 w-full"
        >
          เข้าใช้งาน
        </button>
      </div>
      <Footer />
    </>
  );
}
