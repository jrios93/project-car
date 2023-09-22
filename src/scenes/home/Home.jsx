import Carr from "@assets/carrito.png";

const Home = () => {
  return (
    <section id="home" className=" flexBetween w-full gap-16 bg-gray-20 py-32">
      <div className="flexBetween w-5/6 mx-auto">
        <div className="flex flex-col  gap-8 w-full justify-around">
          <h1 className="text-[72px] font-bold uppercase">lorem Ipsun</h1>
          <p className="text-[18px] w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur corporis perspiciatis provident ea dicta a possimus eos
            animi fugit eaque nesciunt enim explicabo, expedita repudiandae,
            doloremque veniam, iste iure minus.
          </p>
          <button className="bg-secondary-500 rounded-full p-2 px-5 w-1/5">
            Descargar Catálogo
          </button>
        </div>
        <div className="flex basis-3/5 justify-center">
          <img alt="imagen" src={Carr} className=" rounded-full" />
        </div>
      </div>
    </section>
  );
};
export default Home;
