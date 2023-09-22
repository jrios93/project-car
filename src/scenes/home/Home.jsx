import Carr from "@assets/carrito.png";
const Home = () => {
  return (
    <section id="home" className=" flexBetween w-full gap-16 bg-gray-20 py-24">
      <div className="flexBetween w-5/6 mx-auto">
        <div className="flex flex-col  gap-8 w-full justify-around">
          <h1 className="text-[72px] font-bold uppercase w-3/4">
            ¡DISFRUTA DE TUS MOMENTOS ESPECIALES!
          </h1>
          <p className="text-base w-3/4">
            Nos apasiona llevar la magia de la gastronomía a eventos especiales
            de una manera única y encantadora. Nuestro propósito es crear
            momentos memorables al ofrecer una experiencia culinaria inolvidable
            a través de bocaditos exquisitos, servidos con elegancia y estilo en
            nuestras encantadoras carretillas vintage.
          </p>
          <button className="bg-secondary-500 rounded-full p-2 px-5 w-1/5">
            Descargar Catálogo
          </button>
        </div>
        <div className="flex basis-3/5 justify-center">
          <img
            alt="carro"
            src={Carr}
            className=" rounded-full  w-2/4 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default Home;
