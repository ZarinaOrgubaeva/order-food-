import { fetchApi } from "../../lib/fetchApi";

export const mealsActionsTypes = {
  GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
  GET_MEALS_STARTED: "GET_MEALS_STARTED",
  GET_MEALS_FAILED: "GET_MEALS_FAILED",
};

const initState = {
  meals: [],
  isLoading: false,
  error: "",
};
export const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case mealsActionsTypes.GET_MEALS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case mealsActionsTypes.GET_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        isLoading: false,
        error: "",
      };
    case mealsActionsTypes.GET_MEALS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await fetchApi("foods");
      dispatch({
        type: mealsActionsTypes.GET_MEALS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: mealsActionsTypes.GET_MEALS_FAILED,
        payload: "Failed to load meals",
      });
    }
  };
};
