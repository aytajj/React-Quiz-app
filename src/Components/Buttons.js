import React from 'react'


function Buttons(props) {

  const answers = props.answers

  return (
    <div>
      <input
       style={
        answers === null ? { display: 'none' } : { display: 'inline-block' }
      } 
      onChange={props.onChange} id={props.value} type="checkbox" checked={false}
      value={props.value}
      />
      <label for={props.value}>{answers}</label>
    </div>
  )
}

export default Buttons
