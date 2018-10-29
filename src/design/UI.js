import React from 'react';
// Mostly an experiment

export const Heading = ( props ) => {
  return <h1 className={ props.className }>{ props.children.toString() }</h1>
};

export const Pnorm = ( props ) => {
  return <p className={ props.className }>{ props.children.toString() }</p>
};

export const Pmeasure = ( props ) => {
  return <p className={ props.className + ' measure'}>{ props.children.toString() }</p>
};

export const InlineList = ( props ) => {

  return <ul style={{
      display: 'inline-block'
  }}>
    { props.data.map(
        (e,i) => <li key={i} style={{
          display: 'inline-block',
          listStyle: 'none'
        }}>
          {e}
        </li>
    ) }
  </ul>
};

export const Table = ( props ) => {
  return <table border="2">
    { props.children }
  </table>
}

export const Row = ( props ) => {
  return <tr>
    { props.children }
  </tr>
}

export const Cell = ( props ) => {
  return <td>
    { props.children }
  </td>
}
