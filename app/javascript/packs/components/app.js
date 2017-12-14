import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        &nbsp;
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="stats-box-all-info pull-right">
            <i className="fa fa-address-card-o" aria-hidden="true"></i> 63
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <App />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
