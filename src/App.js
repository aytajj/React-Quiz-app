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
    return (
        <div>
            <Questions question={question} />
        </div>
    )
}

export default App
