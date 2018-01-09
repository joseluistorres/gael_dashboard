import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LeftSection from './left_section';
import RightSection from './right_section';

const TimeBlock = ({ range, total }) => (
    <div className="row">
      <LeftSection range={range} total={total} />
      <RightSection />
    </div>
)

export default TimeBlock;
