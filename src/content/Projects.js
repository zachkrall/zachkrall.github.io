import React from 'react';
// import { Heading } from '../ui/Type.js';

const Card = ( props ) => {
  let e = props.data;
  let image_dir = 'images/'
  return <div className="projectCard" tags={props.tags}>
  <a href={e.link.url}>
    { e.image && <img src={image_dir + e.image} />}
    <div>
    { e.title && <div><b>{e.title}</b></div> }
    { e.desc && <>{e.desc}</> }
    <ul>
      { e.tags.map( (e,i) => <li
        style={{
          display: 'inline-block',
          marginRight: '0.5em'
        }} key={i}>#{e}</li> )
      }
    </ul>
    </div>
  </a>
  </div>
};

class Projects extends React.Component {

  constructor(props) {
    super(props);

    // LATER:
    //  Add Filters functionality
    //  to sort projects by tags

    this.state = {};
  }

  render() {
    return <section id="projects">
      <h1>Projects</h1>
      <div className="projectWrapper">
        { this.props.projects.map( (e, i) => <Card key={i} data={e} tags={e.tags}/> ) }
      </div>
    </section>
  }

}

export default Projects;
