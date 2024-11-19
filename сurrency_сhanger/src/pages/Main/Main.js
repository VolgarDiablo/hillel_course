import React from "react";
import { NavLink } from "react-router-dom";
import debitCard from "../../assets/images/main-description-cuurency.jpg";

const Main = () => {
  return (
    <div>
      <section className="relative w-full  text-white flex items-center justify-center my-28">
        <div className="container mx-auto flex items-center justify-between max-w-[900px]">
          <div className="flex flex-col max-w-[400px] text-left gap-6">
            <h1 className="text-[40px] leading-[56px] font-bold text-[#1F1E25]">
              Конвертер валют
            </h1>
            <p className="text-[#707C87] font-normal text-xl">
              Переважна діяльність банківської групи за останні чотири звітні
              квартали становить 50 і більше відсотків.
            </p>
            <div className="mt-8">
              <NavLink
                to="/changer"
                className="px-6 py-6 bg-[#2C36F2] text-[#F6F7FF] rounded-lg hover:bg-gray-200 transition"
              >
                Конвертувати валюту
              </NavLink>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={debitCard}
              alt="Дебетовая карта"
              className="w-[400px] h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
