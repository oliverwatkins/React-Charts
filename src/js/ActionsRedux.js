"use strict";

export const MiscActions = {
  FETCH_BAR_DATA : 'FETCH_BAR_DATA',
  SERVER_RESPONSE : 'SERVER_RESPONSE',
}

export function fetchBarData(value) {
  return {
    type: MiscActions.FETCH_BAR_DATA,
    value
  }
}

