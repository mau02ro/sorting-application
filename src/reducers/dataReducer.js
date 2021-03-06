/*___ Types ____*/
import {
  UPDATE_DATA,
  UPDATE_ALGORITHM_SELECT,
  UPDATE_WORKING,
  UPDATE_AMOUNT,
} from "../types/index.types";

const INITIAL_STATE = {
  change: false,
  amount_of_values: 14,
  working: false,
  values: [],
  algorithm: [
    { title: "Bubble Sort", key: "bubble" },
    { title: "Test", key: "test" },
  ],
  algorithm_select: "bubble",
};

/*___ Case ____*/
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        values: action.payload,
        change: !state.change,
      };

    case UPDATE_ALGORITHM_SELECT:
      return {
        ...state,
        algorithm_select: action.payload,
      };

    case UPDATE_WORKING:
      return {
        ...state,
        working: !state.working,
      };

    case UPDATE_AMOUNT:
      return {
        ...state,
        amount_of_values: action.payload.amount,
        values: action.payload.arr,
      };

    default:
      return state;
  }
};
