import React, { useState, useEffect } from 'react'
import Questions from './Components/Questions'

function App() {
    const [question, setQuestion] = useState([]);

    const api = "https://quizapi.io/api/v1/questions?apiKey="
    const token = 'vqeU1qnefxwmYMvA4L0lS665vEHxBq7iLndL4A7C'
    useEffect(
        () => {
            fetch(api + token).then(response => response.json()).then(response => setQuestion(response))
        },
        [api]
    )
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);

    const next = (t) => {
        if (index < question.length) {

            setIndex(index + 1);

        }
        if (t) {
            var correctAnswer = t.target.value
            console.log(correctAnswer)
            if (correctAnswer === question[index].correct_answer) {
                setCorrect(correct + 1);

            }
        }

    };
    return (
        <div>
            {index < question.length ? (
                <div className="question">
                    <h1>
                        Suallar: {index + 1}/{question.length}
                    </h1>
                    <Questions
                        nextQuestion={next}
                        answers={question[index].answers}
                        question={question[index].question}
                    />
                </div>
            ) : (
                <h1>Dogru cavab sayi:
                    {correct}</h1>
            )}
        </div>
    )
}

export default App
