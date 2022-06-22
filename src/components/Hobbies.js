import React from 'react'

const Hobbies = () => {
  return (
    <div className='hobbies-container container'>
      <div className='hobbies-content' style={{ 'backgroundColor': '#babaff' }}>
        <div
          className='hobbies-content-desc'
          style={{
            'border': '2px dashed #f00',
          }}
        >
          Youtube
        </div>
      </div>
      <div className='hobbies-content' style={{ 'backgroundColor': '#c6ffdd' }}>
        <div
          className='hobbies-content-desc'
          style={{ 'border': '2px dashed #772ce8' }}
        >
          Twitch
        </div>
      </div>
      <div className='hobbies-content' style={{ 'backgroundColor': '#ffe8d8' }}>
        <div
          className='hobbies-content-desc'
          style={{ 'border': '2px dashed #ff4655' }}
        >
          Valorant
        </div>
      </div>
      <div className='hobbies-content' style={{ 'backgroundColor': '#96cacc' }}>
        <div
          className='hobbies-content-desc'
          style={{ 'border': '2px dashed #144275' }}
        >
          Steam
        </div>
      </div>
    </div>
  )
}

export default Hobbies
