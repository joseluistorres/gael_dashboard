import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppWrapper from './app_wrapper';
import * as AsAppliedItemsActions from '../actions/index';

// const App = () => (
//   <div>
//     <AddWrapper />
//   </div>
// )

// export default App;


/**
 * This functions basically maps the initial state from the reducer to
 * the props variable in the component holder
 *
 */
function mapStateToProps(state) {
  return {
    panel_selected: state.as_applied_items_reducer.panel_selected,
    as_applied_items: state.as_applied_items_reducer.as_applied_items
  };
}

/**
 * This function bind the actions defined in AsAppliedItemsActions
 * to the main component
 *
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AsAppliedItemsActions, dispatch)
  };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)
(AppWrapper);
