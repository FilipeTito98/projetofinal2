const Animal = (props) => {
    const { number, name, latin_name, image_link, habitat, diet, geo_range } = props.animalUnico;
  
    return (
      <article key={number} className="animais">
        
          <ul class="animais">
             
              <h2>{name}</h2>
              <img src={image_link} alt={name} />
              <p class="descricao-latim">Nome em Latim: {latin_name}</p>
              <p class="descricao-habitat">Habitat natural: {habitat}</p>
              <p class="descricao-dieta">Dieta: {diet}</p>
              <p class="descricao-localizacao">Localização: {geo_range}</p>
            
          </ul>
      </article>
    );
  };
  
  export default Animal;