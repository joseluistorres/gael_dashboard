export const SELECT_PANEL = 'SELECT_PANEL';
export const SET_ITEMS = 'SET_ITEMS';
export const CHANGE_COST = 'CHANGE_COST';

export function setItems(args) {
  return {
    type: SET_ITEMS,
    as_applied_items: args.as_applied_items
  };
}

export function selectPanel(args) {
  return {
    type: SELECT_PANEL,
    panel_selected: args.panel_selected
  };
}

export function changeCost(args) {
  return {
    type: CHANGE_COST,
    year: args.year,
    yield_id: args.yield_id,
    value: args.value
  };
}
