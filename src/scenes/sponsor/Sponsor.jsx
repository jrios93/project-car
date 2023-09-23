import Pib from "@assets/pib.png";
import TroncoSeco from "@assets/TroncoSeco.png";
import Jolie from "@assets/jolie.png";

const Sponsor = () => {
  return (
    <div className="bg-primary-100 py-3 w-full h-[150px]">
      <div className="mx-auto w-5/6">
        <div className="flex  w-3/5 items-center justify-between gap-8">
          <img
            alt="Primera iglesia bautista de huancayo"
            src={Pib}
            className="w-36"
          />
          <img alt="Tronco Seco Pizerria" src={TroncoSeco} className="w-36" />
          <img alt="Joyeria Jolie Lune" src={Jolie} className="w-36" />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
