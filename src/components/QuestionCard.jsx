import { useState } from "react";

export default function QuestionCard({ question, questionNumber, total, onNext }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (option) => {
    if (!submitted) setSelected(option);
  };

  const handleSubmit = () => {
    if (selected) setSubmitted(true);
  };

  const handleNext = () => {
    const isCorrect = selected === question.answer;
    onNext(isCorrect);
    setSelected(null);
    setSubmitted(false);
  };

  return (
    <div className="screen question-card">
      <div className="progress">
        Question {questionNumber} of {total}
      </div>
      <h2>{question.question}</h2>
      <div className="options">
        {question.options.map((option) => {
          let className = "option";
          if (submitted) {
            if (option === question.answer) className += " correct";
            else if (option === selected) className += " wrong";
          } else if (option === selected) {
            className += " selected";
          }
          return (
            <button key={option} className={className} onClick={() => handleSelect(option)}>
              {option}
            </button>
          );
        })}
      </div>
      {!submitted ? (
        <button className="btn-primary" onClick={handleSubmit} disabled={!selected}>
          Submit
        </button>
      ) : (
        <button className="btn-primary" onClick={handleNext}>
          {questionNumber === total ? "See Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}