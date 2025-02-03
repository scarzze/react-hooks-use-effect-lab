import React, { useState } from "react";
import Question from "./Question";
import quiz from "../data/quiz";

function App() {
  const [questions, setQuestions] = useState(quiz);
  const [currentQuestionId, setCurrentQuestion] = useState(1);
  const [score, setScore] = useState(0);
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  function handleQuestionAnswered(correct) {
    if (currentQuestionId < questions.length) {
      setCurrentQuestion((currentQuestionId) => currentQuestionId + 1);
    } else {
      setCurrentQuestion(null); // No more questions
    }
    if (correct) {
      setScore((score) => score + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? ( // Only render Question if currentQuestion is defined
          <Question
            question={currentQuestion}
            onAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>

            <h2>Total Correct: {score}</h2>
            <p>Try again.lol</p>
          </>
        )}
      </section>
    </main>
  );
}

export default App;