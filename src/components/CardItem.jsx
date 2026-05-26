import '../styles/Card.css';

export default function CardItem({ pokemon, onClick }) {
  return (
    <div className="card-item" onClick={() => onClick(pokemon.id)}>
      <div className="card-image-container">
        <img 
          src={pokemon.image} 
          alt={pokemon.name} 
          className="card-image"
          loading="lazy"
        />
      </div>
      <span className="card-name">{pokemon.name}</span>
    </div>
  );
}