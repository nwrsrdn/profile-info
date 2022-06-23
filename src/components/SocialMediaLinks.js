import React from 'react';

const SocialMediaLinks = props => {
  return (
    <div className='social-links container'>
      <a
        href="https://www.linkedin.com/in/eaandres/"
        target={ '_blank'}
        rel={'noopener noreferrer'}>
          linkedIn
      </a>
      <a
        href="https://github.com/nwrsrdn"
        target={ '_blank'}
        rel={'noopener noreferrer'}>
          github
      </a>
      <a
        href="https://www.facebook.com/nwrsrdn/"
        target={ '_blank'}
        rel={'noopener noreferrer'}>
          facebook
      </a>
      <a
        href="https://www.youtube.com/channel/UCor7lMzHHUitZcckjSCilKg"
        target={ '_blank'}
        rel={'noopener noreferrer'}>
          youtube
      </a>
      <a
        href="https://www.twitch.tv/weng3x"
        target={ '_blank'}
        rel={'noopener noreferrer'}>
          twitch
      </a>
    </div>
  )
}

export default SocialMediaLinks