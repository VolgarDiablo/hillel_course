import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import login from "../../assets/images/login.svg";
import bgHeaderTitle from "../../assets/images/bg-header-title.png";
import debitCard from "../../assets/images/debit-card.png";

const Header = () => {
  return (
    <div>
      <header className=" mx-auto py-10 bg-gray-50">
        <nav className="flex items-center justify-between container">
          <div className="flex items-center">
            <NavLink to="/" className="mr-8">
              <img alt="Логотип Чіп Чендж" src={logo} className="h-8 w-auto" />
            </NavLink>
            <ul className="flex space-x-6 font-normal text-base leading-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#2C36F2] font-semibold"
                        : "text-customNavLink"
                    } hover:text-blue-500`
                  }
                >
                  Послуги
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/changer"
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#2C36F2] font-semibold"
                        : "text-customNavLink"
                    } hover:text-blue-500`
                  }
                >
                  Конвертер валют
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#2C36F2] font-semibold"
                        : "text-customNavLink"
                    } hover:text-blue-500`
                  }
                >
                  Контакти
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/support"
                  className={({ isActive }) =>
                    `transition ${
                      isActive
                        ? "text-[#2C36F2] font-semibold"
                        : "text-customNavLink"
                    } hover:text-blue-500`
                  }
                >
                  Задати питання
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <NavLink
              to="/"
              className="flex items-center space-x-2 text-customNavLink hover:text-blue-500 transition"
            >
              <img
                src={login}
                alt="Іконка кабінету"
                className="h-6 w-6 inline-block"
              />
              <span>Особистий кабінет</span>
            </NavLink>
          </div>
        </nav>
      </header>

      <section className="relative w-full h-[400px] text-white flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-between max-w-[900px]">
          <div className="flex flex-col max-w-[300px] gap-1">
            <h1 className="text-5xl font-bold">Чіп Чендж</h1>
            <p className="text-lg">Обмінник валют - навчальний</p>
            <div className="mt-8">
              <NavLink
                to="/changer"
                className="px-6 py-3 bg-white text-blue-900 rounded-lg hover:bg-gray-200 transition"
              >
                Конвертер валют
              </NavLink>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              src={debitCard}
              alt="Дебетовая карта"
              className="w-[350px] h-auto"
            />
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-full h-full -z-10"
          style={{
            backgroundImage: `url(${bgHeaderTitle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
    </div>
  );
};

export default Header;
