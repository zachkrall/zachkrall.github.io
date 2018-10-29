import React from 'react';
import ReactDOM from 'react-dom';
import './design/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Resume from './resume.json';

ReactDOM.render(<App resume={Resume} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// ----------------------------
// Vanilla JS Goodness Below 😋
// ----------------------------

// function mapNum (n, start1, stop1, start2, stop2, withinBounds) {
//   var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
//   if (!withinBounds) {
//     return newval;
//   }
//   if (start2 < stop2) {
//     return this.constrain(newval, start2, stop2);
//   } else {
//     return this.constrain(newval, stop2, start2);
//   }
// };
//
// window.addEventListener( "scroll", ()=>{
//
//   var color = {
//     h : '200',
//     s : '100%',
//     l : mapNum(window.scrollY, 0, window.scrollMaxY, 100, 0) + '%'
//   };
//
//   var myColor = `hsl(${parseInt(color.h)}, ${color.s}, ${color.l})`;
//   document.body.style.background = myColor.toString();
//
//   console.log(myColor);
//
// });
