import React from 'react';

const ASkill = ( props ) => {
  return <span>
    { props.children.toString() }
  </span>
};

class Skills extends React.Component{
  render () {
    return <section id="skills">
      <h1>Skills</h1>
      { this.props.items.map(
        (top, index) =>
          <div key={index}><b>{top.category}</b>
          <br/> {top.skills.map( (e,i) => <ASkill key={i}>{e}</ASkill> )}
          </div>
      ) }
    </section>
  }
}

export default Skills;
