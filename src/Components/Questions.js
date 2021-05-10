import React from 'react'
import Buttons from './Buttons'

function Questions(props) {
    return (
        <div>
            {
                props.question.map(
                    (i) => {
                        return (<div key={i.id}>
                            <h1>{i.question}</h1>
                            <Buttons answers={i.answers} correctAnswers ={i.correct_answers}/>
                        </div>)
                    }
                )
            }
        </div>
    )
}

export default Questions
