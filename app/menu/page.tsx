import Image from "next/image";
import shapes from "./../../assets/images/shapes.png";
import money from "./../../assets/images/money.png";
import bmi from "./../../assets/images/bmi.png";
import bmr from "./../../assets/images/bmr.png";
import Footer from "@/component/footer";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <div
        className="w-1/2 border-gray-500 mx-auto mt-20 p-20 mb-20
      flex flex-col items-center rounded-2xl shadow-xl"
      >
        <Image src={shapes} alt="sharpe" width={100} />
        <h1 className="text-2xl text-blue-600 font-bold mt-5">
          คำนวณพื้นที่รูปทรง
        </h1>
        <h1 className="texxt-3xl text-blue-600 mt-2 mb-5">
          โปรแกรมคำนวณพื้นที่รูปทรง
        </h1>
        <div className="flex justify-center w-full ">
          <Link
            href="/moneyshare"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl mt-5 mr-3 w-full text-center"
          >
            <Image src={money} alt="money" width={50} className="mx-auto" />
            แชร์เงินกันเถอะ
          </Link>

          <Link
            href="/bmi"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl mt-5 mr-3 w-full text-center"
          >
            <Image src={bmi} alt="bmi" width={50} className="mx-auto" />
            BMI
          </Link>

          <Link
            href="/bmr"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl mt-5 mr-3 w-full text-center"
          >
            <Image src={bmr} alt="bmr" width={50} className="mx-auto" />
            BMR
          </Link>

          <Link
            href="/shape"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-5 py-2 rounded-xl mt-5 mr-3 w-full text-center"
          >
            <Image src={shapes} alt="shapes" width={50} className="mx-auto" />
            Shape
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
