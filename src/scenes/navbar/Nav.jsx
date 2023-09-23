import Logo from "@assets/Logo.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { useEffect, useState } from "react";

const Nav = () => {
  return (
    <nav>
      <div className="flexBetween fixed top-0 z-30 w-full py-6">
        <div className="flexBetween mx-auto w-5/6">
          <div className="flexBetween gap-16">
            <img alt="logo" src={Logo} />

            <div className="flexBetween w-full">
              <div className="flexBetween gap-8 text-sm ">
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  Inicio
                </p>
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  ¿Qué preparo?
                </p>
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  Nuestros Carritos
                </p>
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  Testimonios
                </p>
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  Ultimos Eventos
                </p>
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  Preguntas Frecuentes
                </p>
                <p className="hover:text-primary-500 hover:cursor-pointer">
                  Llamado a la accion
                </p>
              </div>
            </div>
          </div>
          <div className="flexBetween gap-8">
            <p>Redes Sociales:</p>
            <a href="https://www.facebook.com/profile.php?id=100093239148465">
              <BsFacebook className="text-lg hover:text-primary-500 hover:cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/elduendecito.peru/">
              <AiFillInstagram className="text-lg hover:text-primary-500 hover:cursor-pointer" />
            </a>
            <a href="https://www.tiktok.com/@elduendecito.peru">
              <BiLogoTiktok className="text-lg hover:text-primary-500 hover:cursor-pointer" />
            </a>

            <button className="bg-secondary-500 rounded-full p-2 px-5 hover:bg-primary-500 hover:cursor-pointer hover:text-white">
              ¡Hablemos!
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
