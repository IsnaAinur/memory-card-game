import { useState, useEffect } from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';
import './styles/App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickedIds, setClickedIds] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch data dari PokeAPI saat komponen pertama kali dimuat (Mount)
  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);
      try {
        const pokemonList = [];
        // Ambil 12 Pokemon pertama
        for (let i = 1; i <= 12; i++) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const data = await response.json();
          
          pokemonList.push({
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
          });
        }
        // Acak susunan pertama kali
        setPokemons(shuffleArray(pokemonList));
      } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  // Fungsi Algoritma Pengacak Array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Fungsi Ketika Kartu Diklik
  const handleCardClick = (id) => {
    // Jika Pokemon sudah pernah diklik sebelumnya maka Game Over
    if (clickedIds.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedIds([]);
      alert("Game Over! You clicked the same Pokémon twice. Try again!");
    } else {
      // Jika belum pernah diklik maka Skor bertambah
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds((prev) => [...prev, id]);

      // Cek kemenangan jika berhasil menebak seluruh 12 kartu
      if (newScore === 12) {
        setBestScore(12);
        setScore(0);
        setClickedIds([]);
        alert("Congratulations! You have an amazing memory! You Win!");
      }
    }

    // Selalu acak posisi kartu setelah ada aksi klik dilakukan
    setPokemons((prevPokemons) => shuffleArray(prevPokemons));
  };

  return (
    <div className="app-container">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      
      {loading ? (
        <div className="loading-text">Loading</div>
      ) : (
        <CardGrid pokemons={pokemons} onCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;