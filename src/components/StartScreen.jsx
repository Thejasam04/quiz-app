export default function StartScreen({ onStart, totalQuestions }) {
  return (
    <div className="screen start-screen">
      <h1>🧠 Quiz App</h1>
      <p>Test your knowledge with {totalQuestions} questions</p>
      <button className="btn-primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}