import React from 'react'
import Buttons from './Buttons'

function Questions(props) {
    return (
        <div >
            <h1>{props.question}</h1>
            { Object.entries(props.answers).map((a, b) => (
                <Buttons answers={a[1]} value={a[0]} onChange={(e) => props.nextQuestion(e)} />

            ))}
        </div>

    )
}

export default Questions
