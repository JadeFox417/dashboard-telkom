import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ImgPeople from "../../assets/login.png";
import ImgLine from "../../assets/line.png";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>BGESTR | Telkom Regional 2</title>
        <meta name="description" content="Landing page to admin dashboard." />
      </Helmet>
      <div class="flex h-screen bg-gray-100">
        <div class="flex w-1/2 mx-20 justify-center items-center">
          <img src={ImgPeople} alt="img-landing" style={{ width: "750px", height: "750px" }} />
        </div>
        <div class="flex justify-center items-center">
          <img src={ImgLine} alt="line" className="w-1/2" />
        </div>
        <div class="flex justify-center items-center w-1/2">
          <div class="bg-white rounded-3xl shadow-lg py-14 px-14">
            <div class="text-2xl text-gray-700 font-semibold">Selamat Datang,</div>
            <div class="text-3xl text-red-500 font-bold">DASHBOARD BGESTR</div>
            <a href="dashboard.html">
              <div class="bg-red-500 rounded-full shadow-md mt-14">
                <Link style={{ textDecoration: "none" }} to="/login">
                  <div class="text-white text-xl font-semibold px-32 py-2">Masuk</div>
                </Link>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
