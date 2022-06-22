import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container container'>
      <h2>Send a message</h2>
      <form action="">
        <div className='contact-field'>
          <input type="text" name="" id="" placeholder='Full name'/>
        </div>
        <div className='contact-field'>
          <input type="text" name="" id="" placeholder='Email Address'/>
        </div>
        <div className='contact-field'>
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        </div>
        <div className='contact-field'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
