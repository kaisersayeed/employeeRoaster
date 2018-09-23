import * as actionTypes from "./CompanyInfoActionTypes";
import { fetchCompanyInfoFromData } from "../../Services/EmployeeRoasteringService.js";

export const fetchCompanyInfo = () => {
  const companyInfoPromise = fetchCompanyInfoFromData();
  return dispatch => {
    companyInfoPromise
      .then(data => {
        dispatch({
          type: actionTypes.FETCH_COMPANY_INFO_SUCCESSFUL,
          payload: data
        });
      })
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_COMPANY_INFO_ERROR,
          payload: error
        });
      });
  };
};
