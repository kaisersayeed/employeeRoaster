import * as actionTypes from "./EmployeesActionTypes";
import { fetchEmployeesFromData } from "../../Services/EmployeeRoasteringService";

export const fetchEmployees = () => {
  const employeesPromise = fetchEmployeesFromData();
  return dispatch => {
    employeesPromise
      .then(data => {
        dispatch({
          type: actionTypes.FETCH_EMPLOYEES_SUCCESSFUL,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: actionTypes.FETCH_EMPLOYEES_ERROR, payload: error });
      });
  };
};

export const setSelectedEmployee = id => ({
  type: actionTypes.SET_SELECTED_EMPLOYEE,
  id
});
