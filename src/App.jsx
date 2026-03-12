import { useState } from "react";
import StartScreen from "./components/StartScreen";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import questions from "./data/questions.json";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("start"); // start | quiz | result
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentIndex(0);
    setScore(0);
  };

  const handleNext = (isCorrect) => {
    const newScore = isCorrect ? score + 1 : score;
    if (currentIndex + 1 >= questions.length) {
      setScore(newScore);
      setScreen("result");
    } else {
      setScore(newScore);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="app">
      {screen === "start" && (
        <StartScreen onStart={handleStart} totalQuestions={questions.length} />
      )}
      {screen === "quiz" && (
        <QuestionCard
          question={questions[currentIndex]}
          questionNumber={currentIndex + 1}
          total={questions.length}
          onNext={handleNext}
        />
      )}
      {screen === "result" && (
        <ResultScreen score={score} total={questions.length} onRestart={handleStart} />
      )}
    </div>
  );
}