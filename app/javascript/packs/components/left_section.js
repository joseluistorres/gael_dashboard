import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const LeftSection = ({ total, range }) => (
  <div className="col-md-4">
    <div className="info-box text-center">
        {total}
    </div>
    <div className="date-container">
      <i className="fa fa-calendar" aria-hidden="true"></i>
      <span>{range}</span>
    </div>
  </div>
)

export default LeftSection;

