import React from 'react';
// import axios from 'axios';

var Stats = ( props ) => {
  return <div>
    { props.public &&
        <>Zach has <b>{ props.public }</b> public repos.</>
    }
    { props.private &&
        <>Zach has <b>{ props.private }</b> private repos.</>
    }
  </div>
}

class GitHub extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount(){

    // -- GET GITHUB USER DATA --

    // axios.get('https://api.github.com/users/zachkrall/users').then( (res) => {
    //   this.setState({ data: res.data })
    //   console.log(res.data);
    // }).catch( (err) => {
    //   this.setState({ data: null });
    //   console.error(err);
    // });

  }

  render () {

    return <section>
      { this.state.data ?
        <Stats public={ this.state.data.public_repos } private={ this.state.data.private_repos }/>
        : <>Error fetching GitHub Info <span role="img" aria-label="face with open mouth and cold sweat">😰</span></>
      }
    </section>
  }

}

export default GitHub;
