import React from 'react';
import '../styles/PopUp.css'

function PopUp ({close,campus}){
  return (
    <div className='popup'>
      <div className='popup_inner'>
        {campus? (
          <h1>{campus}</h1>
        ):(<div>hello</div>)}
        <div className="button">
          <button>Submit</button>
          <button onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default PopUp;