import React, { useState } from "react";
import { z } from "zod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import arrows from "../../assets/images/changer/arrows.png";
import calendar from "../../assets/images/changer/calendar.png";

const Changer = () => {
  const currencies = ["USD", "UAH", "GBP", "CNY"];
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setCurrencyTo] = useState("UAH");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const maxDate = new Date();
  const minDate = new Date();

  const handleCurrencyFromChange = (e) => {
    setCurrencyFrom(e.target.value);
    if (e.target.value === currencyTo) {
      const availableCurrencies = currencies.filter(
        (c) => c !== e.target.value
      );
      setCurrencyTo(availableCurrencies[0]);
    }
  };

  const handleCurrencyToChange = (e) => {
    setCurrencyTo(e.target.value);
    if (e.target.value === currencyFrom) {
      const availableCurrencies = currencies.filter(
        (c) => c !== e.target.value
      );
      setCurrencyFrom(availableCurrencies[0]);
    }
  };

  minDate.setDate(maxDate.getDate() - 7);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const schema = z.string().regex(/^\d*$/, "Введите только цифры");

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");

  const [error, setError] = useState("");

  const handleFromChange = (e) => {
    const inputValue = e.target.value;

    try {
      schema.parse(inputValue);
      setError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }

    setFromValue(inputValue);
  };

  const handleToChange = (e) => {
    const inputValue = e.target.value;

    try {
      schema.parse(inputValue);
      setError("");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }

    setToValue(inputValue);
  };

  return (
    <div class="flex justify-center items-center py-20 bg-[#F6F7FF]">
      <div class="bg-white rounded-lg shadow-md py-[55px] px-[65px]  w-[960px] ">
        <div class="text-left mb-6">
          <h2 class="text-[40px] leading-[56px] font-bold text-[#1F1E25]">
            Конвертер валют
          </h2>
        </div>

        <form class="pt-[70px]">
          <div class="flex text-left gap-[48px]">
            <div class="flex flex-col flex-1">
              <label
                for="from"
                class="text-xl text-[#707C87] font-medium mb-[30px]"
              >
                В мене є:
              </label>
              <div class="flex gap-[15px]">
                <input
                  type="text"
                  id="from"
                  name="from"
                  placeholder="1000"
                  value={fromValue}
                  onChange={handleFromChange}
                  className="text-[#707C87] text-[20px] text-center leading-7 border border-[#C1C2CA] rounded-[4px] px-3 py-4 w-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="relative w-[120px]">
                  <select
                    value={currencyFrom}
                    onChange={handleCurrencyFromChange}
                    className="w-full h-[60px] text-[#707C87] text-[20px] leading-7 border border-[#C1C2CA] rounded-[4px] px-[16px] pr-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:shadow-md transition appearance-none"
                  >
                    {currencies.map((currency) => (
                      <option
                        key={currency}
                        value={currency}
                        disabled={currency === currencyTo}
                        className={`${
                          currency === currencyTo
                            ? "text-gray-400 line-through"
                            : "cursor-pointer"
                        }`}
                      >
                        {currency}
                      </option>
                    ))}
                  </select>

                  <div className="absolute inset-y-0 right-[10px] flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#707C87]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center items-center pt-[55px]">
              <img src={arrows} alt="Swap Currencies" class="w-6 h-6" />
            </div>

            <div class="flex flex-col flex-1">
              <label
                for="to"
                class="text-xl text-[#707C87] font-medium mb-[30px]"
              >
                Я хочу придбати:
              </label>

              <div class="flex gap-[15px] justify-between w-[355px]">
                <input
                  type="text"
                  id="to"
                  name="to"
                  placeholder="38.7"
                  value={toValue}
                  onChange={handleToChange}
                  className="text-[#707C87] text-[20px] text-center leading-7 border border-[#C1C2CA] rounded-[4px] px-3 py-4 w-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <div className="relative w-[120px]">
                  <select
                    value={currencyTo}
                    onChange={handleCurrencyToChange}
                    className="w-full h-[60px] text-[#707C87] text-[20px] leading-7 border border-[#C1C2CA] rounded-[4px] px-[16px] pr-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:shadow-md transition appearance-none"
                  >
                    {currencies.map((currency) => (
                      <option
                        key={currency}
                        value={currency}
                        disabled={currency === currencyFrom}
                        className={`${
                          currency === currencyFrom
                            ? "text-gray-400 line-through"
                            : "cursor-pointer"
                        }`}
                      >
                        {currency}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-[10px] flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#707C87]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2">
              {error} {/* Отображение общего сообщения об ошибке */}
            </p>
          )}

          <div className="flex justify-between items-center pt-[25px]">
            <div
              className="flex items-center  text-[#707C87] text-[20px] leading-7 w-[220px] h-[60px] border px-[20px] py-4 border-[#C1C2CA] rounded-[4px] cursor-pointer hover:shadow-md transition"
              onClick={(e) => e.preventDefault()}
            >
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={minDate}
                maxDate={maxDate}
                customInput={
                  <div className="flex items-center justify-between">
                    <div className="text-[#707C87] text-xl mr-16">
                      {selectedDate.toLocaleDateString("uk-UA")}
                    </div>
                    <img src={calendar} alt="Календар" />
                  </div>
                }
              />
            </div>

            <button
              type="submit"
              className="bg-[#2C36F2] text-[#F6F7FF] text-[18px] leading-[25.2px] h-[60px] w-[220px] font-semibold px-4 rounded-md hover:bg-blue-600 transition"
            >
              Зберегти результат
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Changer;
