import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h2>Send a message</h2>
      <form action="">
        <div>
          <input type="text" name="" id="" placeholder='Full name'/>
        </div>
        <div>
          <input type="text" name="" id="" placeholder='Email Address'/>
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
