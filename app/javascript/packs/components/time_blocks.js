import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimeBlock from './time_block';

const TimeBlocks = ({ timeBlocks }) => (
  <div>
    {timeBlocks.map((timeBlock, index) => (
      <TimeBlock key={index} {...timeBlock} />
    ))}
  </div>
)

export default TimeBlocks;
