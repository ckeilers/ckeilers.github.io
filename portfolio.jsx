import React from 'react';
import ReactDOM from 'react-dom';
//import 'main.css';

//import FetchModelData from './lib/fetchModelData.js';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>This is a test!</div>);
  }
}


ReactDOM.render(
  <Portfolio />,
  document.getElementById('portfoliospace'),
);