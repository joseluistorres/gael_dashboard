import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HeaderStats from './header_stats';
import TimeBlocks from './time_blocks';

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // $.get('/as_applied_items').done(function(data) {
    //   this.state.original_data = data;

    //   this.props.actions.setItems({
    //     as_applied_items: this._getItemsFromScenarios(data)
    //   });
    // }.bind(this));
  }

  render(){
    return(
      <div className="container">
        <HeaderStats />
        <TimeBlocks timeBlocks={[{range: "Nov 27 - Dic 3 2017", total: 20}, {range: 2, total: 20}]} />
      </div>
    );
  }
}
