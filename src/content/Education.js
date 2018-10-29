import React from 'react';

const Edu = ( props ) => {

  let e = props.data;

  return <div>
    {e.school}, {e.degree}, {e.dates}
  </div>
}

class Education extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      demo: 'demo'
    }
  }

  render () {
    return <section>
      <h1 id="education">Education</h1>

      { this.props.data.map( (e,i) => <Edu data={e} key={i}/> ) }

    </section>
  }

}

export default Education;
