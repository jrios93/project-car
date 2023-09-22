import Logo from "@assets/Logo.png";
import Facebook from "@assets/facebook.png";
import Instagram from "@assets/instagram.png";
import Tiktok from "@assets/tik-tok.png";

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
                <p>¿Qué Bocaditos Preparo?</p>
                <p>Servicios</p>
                <p>Testimonios</p>
                <p>Ultimos Eventos</p>
                <p>Preguntas Frecuentes</p>
                <p>Llamado a la accion</p>
              </div>
            </div>
          </div>
          <div className="flexBetween gap-8">
            <a href="https://www.facebook.com/profile.php?id=100093239148465">
              <img alt="Facebook" src={Facebook} />
            </a>
            <a href="https://www.instagram.com/elduendecito.peru/">
              <img alt="Instagram" src={Instagram} />
            </a>
            <a href="https://www.tiktok.com/@elduendecito.peru">
              <img alt="Tiktok" src={Tiktok} />
            </a>

            <button className="bg-secondary-500 rounded-full p-2 px-5">
              Catálogo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
