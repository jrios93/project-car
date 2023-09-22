import Logo from "@assets/Logo.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
const Nav = () => {
  return (
    <nav>
      <div className="flexBetween fixed top-0 z-30 w-full py-6">
        <div className="flexBetween mx-auto w-5/6">
          <div className="flexBetween gap-16">
            <img alt="logo" src={Logo} />

            <div className="flexBetween w-full">
              <div className="flexBetween gap-8 text-sm">
                <p>Inicio</p>
                <p>¿Qué preparo?</p>
                <p>Carritos</p>
                <p>Testimonios</p>
                <p>Ultimos Eventos</p>
                <p>Preguntas Frecuentes</p>
                <p>Llamado a la accion</p>
              </div>
            </div>
          </div>
          <div className="flexBetween gap-8">
            <p>Redes Sociales:</p>
            <a href="https://www.facebook.com/profile.php?id=100093239148465">
              <BsFacebook className="text-lg" />
            </a>
            <a href="https://www.instagram.com/elduendecito.peru/">
              <AiFillInstagram className="text-lg" />
            </a>
            <a href="https://www.tiktok.com/@elduendecito.peru">
              <BiLogoTiktok className="text-lg" />
            </a>

            <button className="bg-secondary-500 rounded-full p-2 px-5">
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
