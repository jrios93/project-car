const Problem = () => {
  return (
    <div className="flex flex-col justify-between bg-white w-full gap-8">
      <div className="mx-auto w-5/6 py-20">
        <h2 className="uppercase text-4xl font-bold">¿Qué preparo?</h2>
        <p>
          Sabemos que te enfrentas a un dilema constante: ¿cómo hacer que tus
          eventos y momentos especiales sean realmente excepcionales? Los
          desafíos son reales:
        </p>
        <div>
          <div className="grid grid-cols-3">
            <div>
              <p>Sorprender a tus Seres Queridos:</p>
              <p>
                Cuando deseas hacer sonreír a tus seres queridos con algo
                especial, la presión de encontrar algo realmente impactante
                puede ser abrumadora.
              </p>
            </div>
            <div>
              <p>Elevar tu Rutina Cotidiana:</p>
              <p>
                La monotonía a veces puede ahogarte, y te mereces un respiro.
                ¿Por qué no convertir una cena común en una experiencia
                extraordinaria?
              </p>
            </div>
            <div>
              <p>Añadir Sabor a tu Vida: </p>
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
