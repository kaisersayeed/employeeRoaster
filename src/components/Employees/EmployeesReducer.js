import * as actionTypes from "./EmployeesActionTypes";

const initialState = {
  list: [],
  selectedEmployee: {}
};
const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EMPLOYEES_SUCCESSFUL:
      return {
        ...state,
        list: [...action.payload]
      };
    case actionTypes.FETCH_EMPLOYEES_ERROR:
      return state;
    case actionTypes.SET_SELECTED_EMPLOYEE:
      const { list } = state;
      const selected = list.find(employee => employee.id === action.id);
      return {
        ...state,
        selectedEmployee: selected ? selected : null
      };
    default:
      return state;
  }
};

export default EmployeeReducer;
