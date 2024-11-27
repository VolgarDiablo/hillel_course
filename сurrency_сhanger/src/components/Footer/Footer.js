import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import facebook from '../../assets/images/footer/facebook.png';
import globalcall from '../../assets/images/footer/globalcall.png';
import hotline from '../../assets/images/footer/hotline.png';
import insta from '../../assets/images/footer/insta.png';
import twitter from '../../assets/images/footer/twitter.png';
import youtube from '../../assets/images/footer/youtube.png';

const Footer = () => {
  return (
    <div className="bg-[#F6F7FF] px-20 py-14 text-left">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20 container justify-around">
        <div>
          <img src={logo} alt="logo" className="mb-4" />
          <p className="text-gray-500 text-xs leading-relaxed">
            04128, м.Київ, вул. Хрещатик, 19
            <br />
            Ліцензія НБУ №156
            <br />Ⓒ ПАТ ЧіпЧендж, 2019-2023
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="space-y-2 text-base">
            <li>
              <NavLink
                to="/"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Послуги
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/changer"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Конвертер валют
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Контакти
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className="text-gray-600 hover:text-blue-500 transition"
              >
                Задати питання
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-start space-x-4">
          <img src={hotline} alt="Гаряча лінія" className="h-4 w-2.5" />
          <div>
            <p className="font-semibold text-gray-700">3773</p>
            <p className="text-gray-500 text-xs">Цілодобова підтримка</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src={globalcall} alt="Дзвінки по Україні" className="h-4 w-4" />
          <div>
            <p className="font-semibold text-gray-700">8 800 111 22 33</p>
            <p className="text-gray-500 text-xs">
              Безкоштовно для дзвінків в межах України
            </p>
          </div>
        </div>

        <div className="flex gap-4  ">
          <img src={facebook} alt="Facebook" className="h-4 w-4" />
          <img src={insta} alt="Instagram" className="h-4 w-4" />
          <img src={twitter} alt="Twitter" className="h-4 w-4" />
          <img src={youtube} alt="YouTube" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
