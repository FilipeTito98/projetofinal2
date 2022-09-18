import Animal from "./Animal";

const ListaAnimais = (props) => {
  const dados = props.dados;

  return (
    <>
      {dados.map((objeto) => {
        return <Animal key={objeto.number} animalUnico={objeto} />;
      })}
    </>
  );
};

export default ListaAnimais;