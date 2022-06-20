import React, { useState } from 'react';

import Header from '../components/Header';
import SocialMediaLinks from '../components/SocialMediaLinks';
import Intro from '../components/Intro';
import SwitchButtons from '../components/SwitchButtons';
import Career from '../components/Career';
import Hobbies from '../components/Hobbies';
import Contact from '../components/Contact';

function App() {
  const [ content, setContent ] = useState('intro')

  let contentValue

  const contentFunc = event => {
    setContent(prevState => {
      return event.target.value
    })
  }

  if (content === 'intro') {
    contentValue = <Intro />
  } else if (content === 'career') {
    contentValue = <Career />
  } else if (content === 'hobbies') {
    contentValue = <Hobbies />
  } else if (content === 'contact') {
    contentValue = <Contact />
  }

  return (
    <div className="App">
      <Header />
      <SocialMediaLinks />
      <SwitchButtons getContent={ contentFunc } />
      { contentValue }
    </div>
  );
}

export default App;
