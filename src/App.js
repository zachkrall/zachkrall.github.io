//  -- App.js --
//
//  This document is our main view
//  of our website.
//

import React from 'react';

import {
  Education,
  Footer,
  GitHub,
  Projects,
  Skills,
  TopBar
} from './content/_.js';

var Nav = ( props ) => {
  return <nav>
    <ul>
      { props.links.map( (e,i) => <li key={i}><a href={e.url}>{e.title}</a></li> ) }
    </ul>
  </nav>
}

var Header = ( props ) => {
  return <header id="about">
    <div>
    <h1 className="measure">
      Hi <span role="img" aria-label="waving hand">👋</span> I'm Zach.
    </h1>
    <p className="measure">
      I am a visual artist and creative technologist
      based in Brooklyn, NY. Currently, I am a graduate student in the MFA Design and Technology program at Parsons
      School of Design.
    </p>
    </div>
  </header>
}

class App extends React.Component {
  render() {

    const data = this.props.resume;

    return (
      <div id="App">
        <TopBar headings={[
          "About","Projects","Skills"
        ]}/>
        <Header bio={ data.bio } />

        <Projects projects={ data.projects }/>

        <GitHub />

        <Skills items={ data.skills }/>
        <Education data={ data.education }/>

        <Nav links={ data.links } />
        <Footer />
      </div>
    );
  }
}

export default App;
