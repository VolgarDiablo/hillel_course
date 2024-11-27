import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import debounce from 'lodash/debounce';
import arrows from '../../assets/images/changer/arrows.png';
import calendar from '../../assets/images/changer/calendar.png';
import exchangeRates from '../../components/data/exchangeRates.json';

const Changer = () => {
  const currencies = ['USD', 'UAH', 'GBP', 'CNY'];
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('UAH');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [fromValue, setFromValue] = useState('');
  const [fromError, setFromError] = useState('');
  const [toValue, setToValue] = useState('');
  const [toError, setToError] = useState('');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [saveSchemaError, setSaveSchemaError] = useState('');
  const [conversionHistory, setConversionHistory] = useState([]);

  const maxDate = new Date('2024-11-24');
  const minDate = new Date();
  minDate.setDate(maxDate.getDate() - 7);

  const schema = z.string().regex(/^\d*\.?\d*$/, 'Введіть лише цифри');
  const saveSchema = z.string().nonempty('Введіть суму');

  const fetchExchangeRate = () => {
    try {
      const formattedDate = selectedDate.toLocaleDateString('uk-UA');
      const dailyRates = exchangeRates.find(
        (entry) => entry.date === formattedDate
      );

      if (!dailyRates) {
        console.error(`Курс для даты ${formattedDate} не найден.`);
        setExchangeRate(null);
        return;
      }

      let rate;

      if (currencyFrom === 'UAH') {
        const targetRate = dailyRates.exchangeRate.find(
          (r) => r.currency === currencyTo
        );
        if (targetRate) {
          rate = 1 / targetRate.purchaseRateNB;
          setExchangeRate(rate);
          console.log(`Курс UAH к ${currencyTo}: ${rate}`);
        } else {
          console.error(`Курс UAH к ${currencyTo} не найден.`);
          setExchangeRate(null);
        }
      } else if (currencyTo === 'UAH') {
        const targetRate = dailyRates.exchangeRate.find(
          (r) => r.currency === currencyFrom
        );
        if (targetRate) {
          rate = targetRate.saleRateNB;
          setExchangeRate(rate);
          console.log(`Курс ${currencyFrom} к UAH: ${rate}`);
        } else {
          console.error(`Курс ${currencyFrom} к UAH не найден.`);
          setExchangeRate(null);
        }
      } else {
        const fromRate = dailyRates.exchangeRate.find(
          (r) => r.currency === currencyFrom
        );
        const toRate = dailyRates.exchangeRate.find(
          (r) => r.currency === currencyTo
        );

        if (fromRate && toRate) {
          rate = toRate.purchaseRateNB / fromRate.saleRateNB;
          setExchangeRate(rate);
          console.log(`Кросс-курс ${currencyFrom} к ${currencyTo}: ${rate}`);
        } else {
          console.error(
            `Курс для ${currencyFrom} или ${currencyTo} не найден.`
          );
          setExchangeRate(null);
        }
      }
    } catch (error) {
      console.error('Ошибка при обработке данных из JSON:', error);
      setExchangeRate(null);
    }
  };

  const debouncedFetchExchangeRate = debounce(fetchExchangeRate, 1000);

  useEffect(() => {
    debouncedFetchExchangeRate();
    return () => debouncedFetchExchangeRate.cancel();
  }, [currencyFrom, currencyTo, selectedDate]);

  useEffect(() => {
    if (exchangeRate && fromValue) {
      const convertedToValue = (parseFloat(fromValue) * exchangeRate).toFixed(
        2
      );
      setToValue(convertedToValue || '');
    }
  }, [exchangeRate]);

  const handleCurrencyFromChange = (e) => {
    setCurrencyFrom(e.target.value);
    if (e.target.value === currencyTo) {
      const availableCurrencies = currencies.filter(
        (c) => c !== e.target.value
      );
      setCurrencyTo(availableCurrencies[0]);
    }

    debouncedFetchExchangeRate();
  };

  const handleCurrencyToChange = (e) => {
    setCurrencyTo(e.target.value);
    if (e.target.value === currencyFrom) {
      const availableCurrencies = currencies.filter(
        (c) => c !== e.target.value
      );
      setCurrencyFrom(availableCurrencies[0]);
    }

    debouncedFetchExchangeRate();
  };

  const handleFromChange = (e) => {
    const inputValue = e.target.value;

    try {
      schema.parse(inputValue);
      setFromError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setFromError(err.errors[0].message);
        setToValue('');
        return;
      }
    }

    setFromValue(inputValue);

    if (exchangeRate && inputValue.trim() !== '') {
      const convertedValue = (parseFloat(inputValue) * exchangeRate).toFixed(2);
      setToValue(convertedValue || '');
    } else {
      setToValue('');
    }
  };

  const handleToChange = (e) => {
    const inputValue = e.target.value;

    try {
      schema.parse(inputValue);
      setToError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setToError(err.errors[0].message);
        setFromValue('');
        return;
      }
    }

    setToValue(inputValue);

    if (exchangeRate && inputValue.trim() !== '') {
      const convertedValue = (parseFloat(inputValue) / exchangeRate).toFixed(2);
      setFromValue(convertedValue || '');
    } else {
      setFromValue('');
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSaveResult = (e) => {
    e.preventDefault();

    try {
      saveSchema.parse(fromValue);
      saveSchema.parse(toValue);

      const savedHistory =
        JSON.parse(localStorage.getItem('conversionHistory')) || [];
      const newRecord = {
        date: selectedDate.toLocaleDateString('uk-UA'),
        from: `${fromValue} ${currencyFrom}`,
        to: `${toValue} ${currencyTo}`,
      };

      const updatedHistory =
        savedHistory.length >= 10
          ? [newRecord, ...savedHistory.slice(0, 9)]
          : [newRecord, ...savedHistory];

      setSaveSchemaError('');
      localStorage.setItem('conversionHistory', JSON.stringify(updatedHistory));
    } catch (err) {
      if (err instanceof z.ZodError) {
        setSaveSchemaError(err.errors[0].message);
      }
    }
  };

  useEffect(() => {
    const savedHistory =
      JSON.parse(localStorage.getItem('conversionHistory')) || [];
    setConversionHistory(savedHistory);
  }, [handleDateChange]);

  const clearHistory = () => {
    localStorage.removeItem('conversionHistory');
    setConversionHistory([]);
  };

  return (
    <div>
      <div className="flex justify-center items-center py-20 bg-[#F6F7FF]">
        <div className="bg-white rounded-lg shadow-md py-[55px] px-[65px]  w-[960px] ">
          <div className="text-left mb-6">
            <h2 className="text-[40px] leading-[56px] font-bold text-[#1F1E25]">
              Конвертер валют
            </h2>
          </div>

          <form className="pt-[70px]">
            <div className="flex text-left gap-[48px]">
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="from"
                  className="text-xl text-[#707C87] font-medium mb-[30px]"
                >
                  В мене є:
                </label>

                <div className="flex gap-[15px]">
                  <div>
                    <input
                      type="text"
                      id="from"
                      name="from"
                      placeholder="1000"
                      value={fromValue}
                      onChange={handleFromChange}
                      className="text-[#707C87] text-[20px] text-center leading-7 border border-[#C1C2CA] rounded-[4px] px-3 py-4 w-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="relative w-[120px] flex items-center">
                    <select
                      value={currencyFrom}
                      onChange={handleCurrencyFromChange}
                      className="w-full h-[60px] text-[#707C87] text-[20px] leading-7 border border-[#C1C2CA] rounded-[4px] px-[16px] pr-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:shadow-md transition appearance-none flex"
                    >
                      {currencies.map((currency) => (
                        <option
                          key={currency}
                          value={currency}
                          disabled={currency === currencyTo}
                          className={`${
                            currency === currencyTo
                              ? 'text-gray-400 line-through'
                              : 'cursor-pointer'
                          }`}
                        >
                          {currency}
                        </option>
                      ))}
                    </select>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#707C87] ml-[-30px] pointer-events-none"
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
                {fromError && (
                  <p className="text-red-500 text-sm mt-2">{fromError}</p>
                )}
                {saveSchemaError && (
                  <p className="text-red-500 text-sm mt-2">{saveSchemaError}</p>
                )}
              </div>

              <div className="flex justify-center items-center pt-[55px]">
                <img src={arrows} alt="Swap Currencies" className="w-6 h-6" />
              </div>

              <div className="flex flex-col flex-1">
                <label
                  htmlFor="to"
                  className="text-xl text-[#707C87] font-medium mb-[30px]"
                >
                  Я хочу придбати:
                </label>

                <div className="flex gap-[15px] justify-between w-[355px]">
                  <div>
                    <input
                      type="text"
                      id="to"
                      name="to"
                      placeholder="38.7"
                      value={toValue}
                      onChange={handleToChange}
                      className="text-[#707C87] text-[20px] text-center leading-7 border border-[#C1C2CA] rounded-[4px] px-3 py-4 w-[220px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="relative w-[120px] flex items-center">
                    <select
                      value={currencyTo}
                      onChange={handleCurrencyToChange}
                      className="w-full h-[60px] text-[#707C87] text-[20px] leading-7 border border-[#C1C2CA] rounded-[4px] px-[16px] pr-[40px] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer hover:shadow-md transition appearance-none flex"
                    >
                      {currencies.map((currency) => (
                        <option
                          key={currency}
                          value={currency}
                          disabled={currency === currencyFrom}
                          className={`${
                            currency === currencyFrom
                              ? 'text-gray-400 line-through'
                              : 'cursor-pointer'
                          }`}
                        >
                          {currency}
                        </option>
                      ))}
                    </select>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-[#707C87] ml-[-30px] pointer-events-none"
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

                {toError && (
                  <p className="text-red-500 text-sm mt-2">{toError}</p>
                )}
                {saveSchemaError && (
                  <p className="text-red-500 text-sm mt-2">{saveSchemaError}</p>
                )}
              </div>
            </div>

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
                        {selectedDate.toLocaleDateString('uk-UA')}
                      </div>
                      <img src={calendar} alt="Календар" />
                    </div>
                  }
                />
              </div>

              <button
                type="submit"
                className="bg-[#2C36F2] text-[#F6F7FF] text-[18px] leading-[25.2px] h-[60px] w-[220px] font-semibold px-4 rounded-md hover:bg-blue-600 transition"
                onClick={handleSaveResult}
              >
                Зберегти результат
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center py-20 bg-[#FFFFFF]">
        <div className="bg-[#F6F7FF] rounded-lg shadow-md py-[55px] px-[65px] w-[960px] ">
          <div className="flex justify-between mb-8">
            <h2 className="text-[28px] leading-[40px] font-medium text-[#1F1E3F]">
              Історія конвертації
            </h2>

            {conversionHistory.length > 0 && (
              <button
                type="submit"
                className="bg-[#2C36F2] text-[#F6F7FF] text-[18px] leading-[25.2px] h-[60px] w-[220px] font-semibold px-4 rounded-md hover:bg-blue-600 transition"
                onClick={clearHistory}
              >
                Очистити історію
              </button>
            )}
          </div>
          {conversionHistory.length === 0 ? (
            <div className="flex justify-center items-center h-[100px]">
              <span className="text-[#C1C2CA] font-[400] leading-[23px]">
                Історія відсутня
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {conversionHistory.map((record, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded-[4px] shadow-sm"
                >
                  <span className="text-[#C1C2CA] font-[400] leading-[23px]">
                    {record.date}
                  </span>
                  <span className="text-[#707C87] font-[600] leading-[23px]">
                    {record.from}
                  </span>
                  <span className="text-gray-500">→</span>
                  <span className="text-[#707C87] font-[600] leading-[23px]">
                    {record.to}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Changer;
