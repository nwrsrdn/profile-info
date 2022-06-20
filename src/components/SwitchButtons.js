import React from 'react';

function SwitchButtons ({ getContent }) {
  const switchBtn = ['intro', 'career', 'hobbies', 'contact'].map(val => {
    return <button type='button' onClick={ getContent } value={ val }>{ val }</button>
  })

  return (
    <div className='switch-container container'>
      { switchBtn }
    </div>
  )
}

export default SwitchButtons
