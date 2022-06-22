import React from 'react'

const Career = () => {
  return (
    <div className='career-timeline container'>
      <div className='career-container container-fancy'>
        <div className='career-content content-fancy' style={{'backgroundColor': '#ffe4c4'}}>
          <img src="../stratpoint.png" style={{'border-radius': '0%', 'width': '130px', 'height': '40px'}} alt="" />
          <p>05/2021 - Present</p>
          <div style={{'width': '100%'}}>
            <p>Software engineer</p>
          </div>
        </div>
      </div>
      <div className='career-container container-fancy'>
        <div className='career-content content-fancy' style={{'backgroundColor': '#c4ffe4'}}>
          <img src="../cafe24.svg" style={{'border-radius': '0%', 'width': '80px', 'height': '40px'}} alt="" />
          <p>06/2019 - 03/2021</p>
          <div style={{'width': '100%'}}>
            <p>Junior web developer</p>
          </div>
        </div>
      </div>
      <div className='career-container container-fancy'>
        <div className='career-content content-fancy' style={{'backgroundColor': '#e4c4ff'}}>
          <img src="../bb-logo.png" style={{'border-radius': '0%', 'width': '130px', 'height': '25px'}} alt="" />
          <p>11/2018 - 03/2019</p>
          <div style={{'width': '100%'}}>
            <p>Internship</p>
          </div>
        </div>
      </div>
      <div className='career-container container-fancy'>
        <div className='career-content content-fancy' style={{'backgroundColor': '#ffc4fc'}}>
          <img src="../pup-logo.png" style={{'border-radius': '0%', 'width': '50px', 'height': '50px'}} alt="" />
          <p>2015 - 2019</p>
          <div style={{'width': '100%'}}>
            <p>Polytechnic University of the Philippines</p>
            <p>Bachelor of Science in Information Technology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Career
