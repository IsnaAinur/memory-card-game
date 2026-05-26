import CardItem from './CardItem';
import '../styles/Card.css';

export default function CardGrid({ pokemons, onCardClick }) {
  return (
    <div className="card-grid">
      {pokemons.map((pokemon) => (
        <CardItem 
          key={pokemon.id} 
          pokemon={pokemon} 
          onClick={onCardClick} 
        />
      ))}
    </div>
  );
}