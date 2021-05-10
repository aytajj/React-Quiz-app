import React from 'react'


function Buttons(props) {

  const answers = props.answers
  const correctAnswers = props.correctAnswers


  function checkAnswerA() {
    if(correctAnswers.answer_a_correct === "true"){
      console.log('Score + 1')
    }else{
      console.log('Score same')
    }
  }

  function checkAnswerB() {
    if(correctAnswers.answer_b_correct === "true"){
      console.log('Score + 1')
    }else{
      console.log('Score same')
    }
  }

  function checkAnswerC() {
    if(correctAnswers.answer_c_correct === "true"){
      console.log('Score + 1')
    }else{
      console.log('Score same')
    }
  }

  function checkAnswerD() {
    if(correctAnswers.answer_d_correct === "true"){
      console.log('Score + 1')
    }else{
      console.log('Score same')
    }
  }


  function checkAnswerE() {
    if(correctAnswers.answer_e_correct === "true"){
      console.log('Score + 1')
    }else{
      console.log('Score same')
    }
  }

  function checkAnswerF() {
    if(correctAnswers.answer_f_correct === "true"){
      console.log('Score + 1')
    }else{
      console.log('Score same')
    }
  }

  return (
    <div>
      <button onClick = {checkAnswerA} style={
        answers.answer_a === null ? {display:'none'} : {display: 'block'}
      }>{answers.answer_a}</button>
      <button onClick = {checkAnswerB} style={
        answers.answer_b === null ? {display:'none'} : {display: 'block'}
      }>{answers.answer_b}</button>
      <button onClick = {checkAnswerC} style={
        answers.answer_c === null ? {display:'none'} : {display: 'block'}
      }>{answers.answer_c}</button>
      <button onClick = {checkAnswerD} style={
        answers.answer_d === null ? {display:'none'} : {display: 'block'}
      }>{answers.answer_d}</button>
      <button onClick = {checkAnswerE} style={
        answers.answer_e === null ? {display:'none'} : {display: 'block'}
      }>{answers.answer_e}</button>
      <button onClick = {checkAnswerF} style={
        answers.answer_f === null ? {display:'none'} : {display: 'block'}
      }>{answers.answer_f}</button>
    </div>
  )
}

export default Buttons
