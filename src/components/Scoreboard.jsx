import '../styles/Scoreboard.css';

export default function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-box">
        <span className="score-label">Score</span>
        <span className="score-value">{score}</span>
      </div>
      <div className="score-box best">
        <span className="score-label">Best Score</span>
        <span className="score-value">{bestScore}</span>
      </div>
    </div>
  );
}