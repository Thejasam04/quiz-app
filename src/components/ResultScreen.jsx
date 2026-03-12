export default function ResultScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const getMessage = () => {
    if (percentage >= 80) return "🎉 Excellent!";
    if (percentage >= 60) return "👍 Good job!";
    return "📚 Keep practicing!";
  };

  return (
    <div className="screen result-screen">
      <h1>{getMessage()}</h1>
      <div className="score-circle">
        <span className="score-number">{percentage}%</span>
      </div>
      <p>You got <strong>{score}</strong> out of <strong>{total}</strong> correct</p>
      <button className="btn-primary" onClick={onRestart}>
        Play Again
      </button>
    </div>
  );
}