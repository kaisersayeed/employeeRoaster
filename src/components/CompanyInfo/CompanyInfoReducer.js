import * as actionTypes from "./CompanyInfoActionTypes";

const CompanyInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMPANY_INFO_SUCCESSFUL:
      const { companyName, companyMotto, companyEst } = action.payload;
      return { companyName, companyMotto, companyEst };
    case actionTypes.FETCH_COMPANY_INFO_ERROR:
      return {};
    default:
      return state;
  }
};

export default CompanyInfoReducer;
