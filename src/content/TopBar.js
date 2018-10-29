import React from 'react';

class TopBar extends React.Component {

  render () {

    return <div id="topbar">
      <ul>
        Menu
      {
        this.props.headings.map(
          (e,i) => <li key={i}><a href={"#" + e.toLowerCase()}>{e}</a></li>
        )
      }
      </ul>
    </div>

  }

}

export default TopBar;
