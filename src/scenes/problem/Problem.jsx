const Problem = () => {
  return (
    <div className="flex flex-col justify-between bg-white w-full gap-8">
      <div className="mx-auto w-5/6 py-20">
        <div className="flex flex-col justify-between items-start gap-6">
          <h2 className="uppercase text-4xl font-bold">¿Qué preparo?</h2>
          <p className="mb-6">
            Entendemos que enfrentas un estrés constante cuando se acerca un día
            especial. ¿Cómo puedes transformar tus eventos y momentos especiales
            en experiencias verdaderamente excepcionales? Los desafíos son
            reales:
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col justify-center  items-center gap-6 border-2 border-primary-500 p-6">
              <p className="font-semibold">Sorprender a tus Seres Queridos:</p>
              <p>
                Cuando deseas hacer sonreír a tus seres queridos con algo
                especial, la presión de encontrar algo realmente impactante
                puede ser abrumadora.
              </p>
            </div>
            <div className="flex flex-col justify-center  items-center gap-6 border-2 border-primary-500 p-6">
              <p className="font-semibold">Elevar tu Rutina Cotidiana:</p>
              <p>
                La monotonía a veces puede ahogarte, y te mereces un respiro.
                ¿Por qué no convertir una cena común en una experiencia
                extraordinaria?
              </p>
            </div>
            <div className="flex flex-col justify-center  items-center gap-6 border-2 border-primary-500 p-6">
              <p className="font-semibold">Añadir Sabor a tu Vida: </p>
              <p>
                Aunque no estés celebrando un evento en particular, la vida
                cotidiana merece ser sabrosa y emocionante. Pero la preparación
                de comidas excepcionales puede parecer una tarea insuperable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
